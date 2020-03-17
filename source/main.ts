import * as data from "./data";
import * as util from "./util";

export { data };
export { util };

export const releaseOrigin = "https://definy.app";

export const clientModeToOriginUrl = (clientMode: data.ClientMode): URL => {
  switch (clientMode._) {
    case "DebugMode": {
      const originUrl = new URL("http://[::1]");
      originUrl.port = clientMode.int32.toString();
      return originUrl;
    }
    case "Release":
      return new URL(releaseOrigin);
  }
};

const languageQueryKey = "hl";
export const defaultLanguage: data.Language = "English";

export const urlDataToUrl = (urlData: data.UrlData): URL => {
  const url = clientModeToOriginUrl(urlData.clientMode);
  url.pathname = locationToPath(urlData.location);
  url.searchParams.append(
    languageQueryKey,
    languageToIdString(urlData.language)
  );
  if (urlData.accessToken._ === "Just") {
    url.hash = "access-token=" + (urlData.accessToken.value as string);
  }
  return url;
};

const locationToPath = (location: data.Location): string => {
  switch (location._) {
    case "Home":
      return "/";
    case "User":
      return "/user/" + (location.userId as string);
    case "Project":
      return "/project/" + (location.projectId as string);
  }
};

const languageToIdString = (language: data.Language): string => {
  switch (language) {
    case "English":
      return "en";
    case "Japanese":
      return "ja";
    case "Esperanto":
      return "eo";
  }
};

/**
 * URLのパスを場所のデータに変換する
 * @param url `https://definy.app/project/580d8d6a54cf43e4452a0bba6694a4ed?hl=ja` のようなURL
 */
export const urlDataFromUrl = (url: URL): data.UrlData => {
  const languageId = url.searchParams.get(languageQueryKey);
  const language: data.Language =
    languageId === null ? defaultLanguage : languageFromIdString(languageId);
  return {
    clientMode: clientModeFromUrl(url.hostname, url.port),
    location: locationFromUrl(url.pathname),
    language: language,
    accessToken: accessTokenFromUrl(url.hash)
  };
};

const clientModeFromUrl = (
  hostName: string,
  portAsString: string
): data.ClientMode => {
  if (hostName === "[::1]") {
    const portNumber = Number.parseInt(portAsString);
    return data.clientModeDebugMode(isNaN(portNumber) ? 443 : portNumber);
  }
  return data.clientModeRelease;
};

const locationFromUrl = (pathName: string): data.Location => {
  const projectResult = pathName.match(/^\/project\/([0-9a-f]{32})$/u);
  if (projectResult !== null) {
    return data.locationProject(projectResult[1] as data.ProjectId);
  }
  const userResult = pathName.match(/^\/user\/([0-9a-f]{32})$/u);
  if (userResult !== null) {
    return data.locationUser(userResult[1] as data.UserId);
  }
  return data.locationHome;
};

const languageFromIdString = (languageAsString: string): data.Language => {
  switch (languageAsString) {
    case "ja":
      return "Japanese";
    case "en":
      return "English";
    case "eo":
      return "Esperanto";
  }
  return defaultLanguage;
};

const accessTokenFromUrl = (hash: string): data.Maybe<data.AccessToken> => {
  const matchResult = hash.match(/access-token=([0-9a-f]{64})/u);
  if (matchResult === null) {
    return data.maybeNothing();
  }
  return data.maybeJust(matchResult[1] as data.AccessToken);
};

export const evaluateExpr = (expr: data.Expr): number | null => {
  switch (expr._) {
    case "Kernel":
      return null;
    case "Int32Literal":
      return expr.int32;
    case "PartReference":
      return null;
    case "CapturePartReference":
      return null;
    case "TagReference":
      return null;
    case "FunctionCall":
      return evaluateFunctionCall(expr.functionCall);
    case "Lambda":
      return null;
  }
};

const evaluateFunctionCall = (
  functionCall: data.FunctionCall
): number | null => {
  const parameterB = evaluateExpr(functionCall.parameter);
  if (parameterB === null) {
    return null;
  }
  switch (functionCall.function._) {
    case "FunctionCall": {
      const parameterA = evaluateExpr(
        functionCall.function.functionCall.parameter
      );
      if (parameterA === null) {
        return null;
      }
      switch (functionCall.function.functionCall.function._) {
        case "Kernel": {
          switch (functionCall.function.functionCall.function.kernelExpr) {
            case "Int32Add":
              return parameterA + parameterB;
            case "Int32Sub":
              return parameterA - parameterB;
            case "Int32Mul":
              return parameterA * parameterB;
          }
        }
      }
    }
  }
  return null;
};

export const exprToString = (expr: data.Expr): string => {
  switch (expr._) {
    case "Kernel":
      return kernelToString(expr.kernelExpr);
    case "Int32Literal":
      return expr.int32.toString();
    case "CapturePartReference":
      return "[c." + (expr.capturePartId as string) + "]";
    case "PartReference":
      return "[" + (expr.partId as string) + "]";
    case "TagReference":
      return "#" + (expr.tagId as string);
    case "FunctionCall":
      return (
        "(" +
        exprToString(expr.functionCall.function) +
        " " +
        exprToString(expr.functionCall.parameter)
      );
    case "Lambda":
      return (
        "λ( " + expr.lambdaBranchList.map(lambdaBranchToString).join(",") + ")"
      );
  }
};

const kernelToString = (kernelExpr: data.KernelExpr): string => {
  switch (kernelExpr) {
    case "Int32Add":
      return "+";
    case "Int32Sub":
      return "-";
    case "Int32Mul":
      return "*";
  }
};

const lambdaBranchToString = (lambdaBranch: data.LambdaBranch): string => {
  return (
    (lambdaBranch.description === ""
      ? ""
      : "{-" + lambdaBranch.description + "-}") +
    conditionToString(lambdaBranch.condition) +
    " → " +
    util.maybeUnwrap(lambdaBranch.expr, exprToString, "□")
  );
};

const conditionToString = (condition: data.Condition): string => {
  switch (condition._) {
    case "Tag":
      return (
        "#" +
        (condition.conditionTag.tag as string) +
        " " +
        util.maybeUnwrap(
          condition.conditionTag.parameter,
          conditionToString,
          ""
        ) +
        ")"
      );
    case "Capture":
      return (
        condition.conditionCapture.name +
        "(" +
        (condition.conditionCapture.capturePartId as string) +
        ")"
      );
    case "Any":
      return "_";
    case "Int32":
      return condition.int32.toString();
  }
};

import * as name from "./name";
import { Type } from "@narumincho/type/distribution/data";

export const time = Type.Custom({
  name: name.time,
  parameterList: [],
});

export const idAndData = (id: Type, data: Type): Type =>
  Type.Custom({
    name: name.idAndData,
    parameterList: [id, data],
  });

export const change = Type.Custom({
  name: name.change,
  parameterList: [],
});

export const suggestionState = Type.Custom({
  name: name.suggestionState,
  parameterList: [],
});

export const suggestion = Type.Custom({
  name: name.suggestion,
  parameterList: [],
});

export const addPart = Type.Custom({
  name: name.addPart,
  parameterList: [],
});

export const suggestionType = Type.Custom({
  name: name.suggestionType,
  parameterList: [],
});

export const suggestionExpr = Type.Custom({
  name: name.suggestionExpr,
  parameterList: [],
});

export const suggestionTypeInputAndOutput = Type.Custom({
  name: name.suggestionTypeInputAndOutput,
  parameterList: [],
});

export const typePartWithSuggestionTypeParameter = Type.Custom({
  name: name.typePartWithSuggestionTypeParameter,
  parameterList: [],
});

export const suggestionTypePartWithSuggestionTypeParameter = Type.Custom({
  name: name.suggestionTypePartWithSuggestionTypeParameter,
  parameterList: [],
});

export const kernelExpr = Type.Custom({
  name: name.kernelExpr,
  parameterList: [],
});

export const localPartReference = Type.Custom({
  name: name.localPartReference,
  parameterList: [],
});

export const TagReference = Type.Custom({
  name: name.tagReference,
  parameterList: [],
});

export const suggestionTagReference = Type.Custom({
  name: name.suggestionTagReference,
  parameterList: [],
});

export const suggestionFunctionCall = Type.Custom({
  name: name.suggestionFunctionCall,
  parameterList: [],
});

export const suggestionLambdaBranch = Type.Custom({
  name: name.suggestionLambdaBranch,
  parameterList: [],
});

export const condition = Type.Custom({
  name: name.condition,
  parameterList: [],
});

export const suggestionBranchPartDefinition = Type.Custom({
  name: name.suggestionBranchPartDefinition,
  parameterList: [],
});

export const typePartBody = Type.Custom({
  name: name.typePartBody,
  parameterList: [],
});

export const type = Type.Custom({
  name: name.type,
  parameterList: [],
});

export const part = Type.Custom({
  name: name.part,
  parameterList: [],
});

export const expr = Type.Custom({
  name: name.expr,
  parameterList: [],
});

export const member = Type.Custom({
  name: name.member,
  parameterList: [],
});

export const pattern = Type.Custom({
  name: name.pattern,
  parameterList: [],
});

export const typePartBodyKernel = Type.Custom({
  name: name.typePartBodyKernel,
  parameterList: [],
});

export const typeInputAndOutput = Type.Custom({
  name: name.typeInputAndOutput,
  parameterList: [],
});

export const typePartIdWithParameter = Type.Custom({
  name: name.typePartIdWithParameter,
  parameterList: [],
});

export const functionCall = Type.Custom({
  name: name.functionCall,
  parameterList: [],
});

export const lambdaBranch = Type.Custom({
  name: name.lambdaBranch,
  parameterList: [],
});

export const kernelCall = Type.Custom({
  name: name.kernelCall,
  parameterList: [],
});

export const evaluatedExpr = Type.Custom({
  name: name.evaluatedExpr,
  parameterList: [],
});

export const branchPartDefinition = Type.Custom({
  name: name.branchPartDefinition,
  parameterList: [],
});

export const conditionTag = Type.Custom({
  name: name.conditionTag,
  parameterList: [],
});

export const conditionCapture = Type.Custom({
  name: name.conditionCapture,
  parameterList: [],
});

export const typeError = Type.Custom({
  name: name.typeError,
  parameterList: [],
});

export const user = Type.Custom({
  name: name.user,
  parameterList: [],
});

export const project = Type.Custom({
  name: name.project,
  parameterList: [],
});

export const ideaItem = Type.Custom({
  name: name.ideaItem,
  parameterList: [],
});

export const idea = Type.Custom({
  name: name.idea,
  parameterList: [],
});

export const itemBody = Type.Custom({
  name: name.itemBody,
  parameterList: [],
});

export const openIdConnectProvider = Type.Custom({
  name: name.openIdConnectProvider,
  parameterList: [],
});

export const urlData = Type.Custom({
  name: name.urlData,
  parameterList: [],
});

export const clientMode = Type.Custom({
  name: name.clientMode,
  parameterList: [],
});

export const location = Type.Custom({
  name: name.location,
  parameterList: [],
});

export const language = Type.Custom({
  name: name.language,
  parameterList: [],
});

export const typePart = Type.Custom({
  name: name.typePart,
  parameterList: [],
});
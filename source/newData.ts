/* eslint-disable */
/* generated by js-ts-code-generator. Do not edit! */

import * as a from "util";

/**
 * UserId, ProjectIdなどのIdをバイナリ形式にエンコードする
 */
export const encodeId = (value: string): ReadonlyArray<number> => {
  const result: Array<number> = [];
  for (let i = 0; i < 16; i += 1) {
    result[i] = Number.parseInt(value.slice(i * 2, i * 2 + 2), 16);
  }
  return result;
};

/**
 * バイナリ形式をUserId, ProjectIdなどのIdにデコードする
 * @param index バイナリを読み込み開始位置
 * @param binary バイナリ
 */
export const decodeId = (
  index: number,
  binary: Uint8Array
): { readonly result: string; readonly nextIndex: number } => ({
  result: [...binary.slice(index, index + 16)]
    .map((n: number): string => n.toString(16).padStart(2, "0"))
    .join(""),
  nextIndex: index + 16,
});

/**
 * ImageTokenなどのTokenをバイナリ形式にエンコードする
 */
export const encodeToken = (value: string): ReadonlyArray<number> => {
  const result: Array<number> = [];
  for (let i = 0; i < 32; i += 1) {
    result[i] = Number.parseInt(value.slice(i * 2, i * 2 + 2), 16);
  }
  return result;
};

/**
 * バイナリ形式をImageTokenなどのTokenにエンコードする
 * @param index バイナリを読み込み開始位置
 * @param binary バイナリ
 */
export const decodeToken = (
  index: number,
  binary: Uint8Array
): { readonly result: string; readonly nextIndex: number } => ({
  result: [...binary.slice(index, index + 32)]
    .map((n: number): string => n.toString(16).padStart(2, "0"))
    .join(""),
  nextIndex: index + 32,
});

/**
 * バイナリと相互変換するための関数
 */
export type Codec<T extends unknown> = {
  readonly encode: (a: T) => ReadonlyArray<number>;
  readonly decode: (
    a: number,
    b: Uint8Array
  ) => { readonly result: T; readonly nextIndex: number };
};

/**
 * -2 147 483 648 ～ 2 147 483 647. 32bit 符号付き整数. JavaScriptのnumberとして扱える. numberの32bit符号あり整数をSigned Leb128のバイナリに変換する
 *  @typePartIdccf22e92cea3639683c0271d65d00673
 */
export type Int32 = number;

/**
 * バイナリ. JavaScriptのUint8Arrayで扱える. 最初にLED128でバイト数, その次にバイナリそのまま
 *  @typePartId743d625544767e750c453fa344194599
 */
export type Binary = Uint8Array;

/**
 * Bool. 真か偽. JavaScriptのbooleanで扱える. true: 1, false: 0. (1byte)としてバイナリに変換する
 *  @typePartId93e91ed730b5e7689250a76096ae60a4
 */
export type Bool = boolean;

/**
 * リスト. JavaScriptのArrayで扱う
 *  @typePartIdd7a1efe440138793962eed5625de8196
 */
export type List<e extends unknown> = ReadonlyArray<e>;

/**
 * Maybe. nullableのようなもの. 今後はRustのstd::Optionに出力するために属性をつける?
 *  @typePartIdcdd7dd74dd0f2036b44dcae6aaac46f5
 */
export type Maybe<value extends unknown> =
  | { readonly _: "Just"; readonly value: value }
  | { readonly _: "Nothing" };

/**
 * 成功と失敗を表す型. 今後はRustのstd::Resultに出力するために属性をつける?
 *  @typePartId943ef399d0891f897f26bc02fa24af70
 */
export type Result<ok extends unknown, error extends unknown> =
  | { readonly _: "Ok"; readonly ok: ok }
  | { readonly _: "Error"; readonly error: error };

/**
 * 文字列. JavaScriptのstringで扱う. バイナリ形式はUTF-8. 不正な文字が入っている可能性がある
 *  @typePartIdf1f830d23ffab8cec4d0191d157b9fc4
 */
export type String = string;

/**
 * 日時. 0001-01-01T00:00:00.000Z to 9999-12-31T23:59:59.999Z 最小単位はミリ秒. ミリ秒の求め方は day*1000*60*60*24 + millisecond
 *  @typePartIdfa64c1721a3285f112a4118b66b43712
 */
export type Time = {
  /**
   * 1970-01-01からの経過日数. マイナスになることもある
   */
  readonly day: Int32;
  /**
   * 日にちの中のミリ秒. 0 to 86399999 (=1000*60*60*24-1)
   */
  readonly millisecond: Int32;
};

/**
 * ログインのURLを発行するために必要なデータ
 *  @typePartIddb245392b9296a48a195e4bd8824dd2b
 */
export type RequestLogInUrlRequestData = {
  /**
   * ログインに使用するプロバイダー
   */
  readonly openIdConnectProvider: OpenIdConnectProvider;
  /**
   * ログインした後に返ってくるURLに必要なデータ
   */
  readonly urlData: UrlData;
};

/**
 * ソーシャルログインを提供するプロバイダー (例: Google, GitHub)
 *  @typePartId0264130f1d9473f670907755cbee50d9
 */
export type OpenIdConnectProvider = "Google" | "GitHub";

/**
 * デバッグモードかどうか,言語とページの場所. URLとして表現されるデータ. Googleなどの検索エンジンの都合( https://support.google.com/webmasters/answer/182192?hl=ja )で,URLにページの言語を入れて,言語ごとに別のURLである必要がある. デバッグ時のホスト名は http://localhost になる
 *  @typePartIddc3b3cd3f125b344fb60a91c0b184f3e
 */
export type UrlData = {
  /**
   * クライアントモード
   */
  readonly clientMode: ClientMode;
  /**
   * 場所
   */
  readonly location: Location;
  /**
   * 言語
   */
  readonly language: Language;
};

/**
 * デバッグモードか, リリースモード
 *  @typePartId261b20a84f5b94b93559aaf98ffc6d33
 */
export type ClientMode = "DebugMode" | "Release";

/**
 * DefinyWebアプリ内での場所を示すもの. URLから求められる. URLに変換できる
 *  @typePartIde830168583e34ff0750716aa6b253c5f
 */
export type Location =
  | { readonly _: "Home" }
  | { readonly _: "CreateProject" }
  | { readonly _: "Project"; readonly projectId: ProjectId }
  | { readonly _: "User"; readonly userId: UserId }
  | { readonly _: "Idea"; readonly ideaId: IdeaId }
  | { readonly _: "Suggestion"; readonly suggestionId: SuggestionId }
  | { readonly _: "About" }
  | { readonly _: "Debug" };

/**
 * 英語,日本語,エスペラント語などの言語
 *  @typePartIda7c52f1164c69f56625e8febd5f44bf3
 */
export type Language = "Japanese" | "English" | "Esperanto";

/**
 * プロジェクトを区別するためのID
 *  @typePartId4e3ab0f9499404a5fa100c4b57835906
 */
export type ProjectId = string & { readonly _projectId: never };

/**
 * ユーザーを区別するためのID
 *  @typePartId5a71cddc0b95298cb57ec66089190e9b
 */
export type UserId = string & { readonly _userId: never };

/**
 * アイデアを区別するためのID
 *  @typePartId719fa4020ae23a96d301d9fa31d8fcaf
 */
export type IdeaId = string & { readonly _ideaId: never };

/**
 * 提案を区別するためのID
 *  @typePartId72cc637f6803ef5ca7536889a7fff52e
 */
export type SuggestionId = string & { readonly _suggestionId: never };

/**
 * -2 147 483 648 ～ 2 147 483 647. 32bit 符号付き整数. JavaScriptのnumberとして扱える. numberの32bit符号あり整数をSigned Leb128のバイナリに変換する
 * @typePartIdccf22e92cea3639683c0271d65d00673
 */
export const Int32: { readonly codec: Codec<Int32> } = {
  codec: {
    encode: (value: Int32): ReadonlyArray<number> => {
      let rest: number = value | 0;
      const result: Array<number> = [];
      while (true) {
        const byte: number = rest & 127;
        rest >>= 7;
        if (
          (rest === 0 && (byte & 64) === 0) ||
          (rest === -1 && (byte & 64) !== 0)
        ) {
          result.push(byte);
          return result;
        }
        result.push(byte | 128);
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Int32; readonly nextIndex: number } => {
      let result: number = 0;
      let offset: number = 0;
      while (true) {
        const byte: number = binary[index + offset];
        result |= (byte & 127) << (offset * 7);
        offset += 1;
        if ((128 & byte) === 0) {
          if (offset * 7 < 32 && (byte & 64) !== 0) {
            return {
              result: result | (~0 << (offset * 7)),
              nextIndex: index + offset,
            };
          }
          return { result, nextIndex: index + offset };
        }
      }
    },
  },
};

/**
 * バイナリ. JavaScriptのUint8Arrayで扱える. 最初にLED128でバイト数, その次にバイナリそのまま
 * @typePartId743d625544767e750c453fa344194599
 */
export const Binary: { readonly codec: Codec<Binary> } = {
  codec: {
    encode: (value: Binary): ReadonlyArray<number> =>
      Int32.codec.encode(value.length).concat([...value]),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Binary; readonly nextIndex: number } => {
      const length: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      const nextIndex: number = length.nextIndex + length.result;
      return { result: binary.slice(length.nextIndex, nextIndex), nextIndex };
    },
  },
};

/**
 * Bool. 真か偽. JavaScriptのbooleanで扱える. true: 1, false: 0. (1byte)としてバイナリに変換する
 * @typePartId93e91ed730b5e7689250a76096ae60a4
 */
export const Bool: {
  /**
   * 真
   */
  readonly True: Bool;
  /**
   * 偽
   */
  readonly False: Bool;
  readonly codec: Codec<Bool>;
} = {
  True: true,
  False: false,
  codec: {
    encode: (value: Bool): ReadonlyArray<number> => [value ? 1 : 0],
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Bool; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        return { result: Bool.True, nextIndex: patternIndex.nextIndex };
      }
      if (patternIndex.result === 1) {
        return { result: Bool.False, nextIndex: patternIndex.nextIndex };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  },
};

/**
 * リスト. JavaScriptのArrayで扱う
 * @typePartIdd7a1efe440138793962eed5625de8196
 */
export const List: {
  readonly codec: <e extends unknown>(a: Codec<e>) => Codec<List<e>>;
} = {
  codec: <e extends unknown>(eCodec: Codec<e>): Codec<List<e>> => ({
    encode: (value: List<e>): ReadonlyArray<number> => {
      let result: Array<number> = Int32.codec.encode(value.length) as Array<
        number
      >;
      for (const element of value) {
        result = result.concat(eCodec.encode(element));
      }
      return result;
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: List<e>; readonly nextIndex: number } => {
      const lengthResult: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      let nextIndex: number = lengthResult.nextIndex;
      const result: Array<e> = [];
      for (let i = 0; i < lengthResult.result; i += 1) {
        const resultAndNextIndex: {
          readonly result: e;
          readonly nextIndex: number;
        } = eCodec.decode(nextIndex, binary);
        result.push(resultAndNextIndex.result);
        nextIndex = resultAndNextIndex.nextIndex;
      }
      return { result, nextIndex };
    },
  }),
};

/**
 * Maybe. nullableのようなもの. 今後はRustのstd::Optionに出力するために属性をつける?
 * @typePartIdcdd7dd74dd0f2036b44dcae6aaac46f5
 */
export const Maybe: {
  /**
   * 値があるということ
   */
  readonly Just: <value extends unknown>(a: value) => Maybe<value>;
  /**
   * 値がないということ
   */
  readonly Nothing: <value extends unknown>() => Maybe<value>;
  readonly codec: <value extends unknown>(
    a: Codec<value>
  ) => Codec<Maybe<value>>;
} = {
  Just: <value extends unknown>(value: value): Maybe<value> => ({
    _: "Just",
    value,
  }),
  Nothing: <value extends unknown>(): Maybe<value> => ({ _: "Nothing" }),
  codec: <value extends unknown>(
    valueCodec: Codec<value>
  ): Codec<Maybe<value>> => ({
    encode: (value: Maybe<value>): ReadonlyArray<number> => {
      switch (value._) {
        case "Just": {
          return [0].concat(valueCodec.encode(value.value));
        }
        case "Nothing": {
          return [1];
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Maybe<value>; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        const result: {
          readonly result: value;
          readonly nextIndex: number;
        } = valueCodec.decode(patternIndex.nextIndex, binary);
        return {
          result: Maybe.Just(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 1) {
        return { result: Maybe.Nothing(), nextIndex: patternIndex.nextIndex };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  }),
};

/**
 * 成功と失敗を表す型. 今後はRustのstd::Resultに出力するために属性をつける?
 * @typePartId943ef399d0891f897f26bc02fa24af70
 */
export const Result: {
  /**
   * 成功
   */
  readonly Ok: <ok extends unknown, error extends unknown>(
    a: ok
  ) => Result<ok, error>;
  /**
   * 失敗
   */
  readonly Error: <ok extends unknown, error extends unknown>(
    a: error
  ) => Result<ok, error>;
  readonly codec: <ok extends unknown, error extends unknown>(
    a: Codec<ok>,
    b: Codec<error>
  ) => Codec<Result<ok, error>>;
} = {
  Ok: <ok extends unknown, error extends unknown>(
    ok: ok
  ): Result<ok, error> => ({ _: "Ok", ok }),
  Error: <ok extends unknown, error extends unknown>(
    error: error
  ): Result<ok, error> => ({ _: "Error", error }),
  codec: <ok extends unknown, error extends unknown>(
    okCodec: Codec<ok>,
    errorCodec: Codec<error>
  ): Codec<Result<ok, error>> => ({
    encode: (value: Result<ok, error>): ReadonlyArray<number> => {
      switch (value._) {
        case "Ok": {
          return [0].concat(okCodec.encode(value.ok));
        }
        case "Error": {
          return [1].concat(errorCodec.encode(value.error));
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Result<ok, error>; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        const result: {
          readonly result: ok;
          readonly nextIndex: number;
        } = okCodec.decode(patternIndex.nextIndex, binary);
        return {
          result: Result.Ok(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 1) {
        const result: {
          readonly result: error;
          readonly nextIndex: number;
        } = errorCodec.decode(patternIndex.nextIndex, binary);
        return {
          result: Result.Error(result.result),
          nextIndex: result.nextIndex,
        };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  }),
};

/**
 * 文字列. JavaScriptのstringで扱う. バイナリ形式はUTF-8. 不正な文字が入っている可能性がある
 * @typePartIdf1f830d23ffab8cec4d0191d157b9fc4
 */
export const String: { readonly codec: Codec<String> } = {
  codec: {
    encode: (value: String): ReadonlyArray<number> => {
      const result: ReadonlyArray<number> = [
        ...new (process === undefined || process.title === "browser"
          ? TextEncoder
          : a.TextEncoder)().encode(value),
      ];
      return Int32.codec.encode(result.length).concat(result);
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: String; readonly nextIndex: number } => {
      const length: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      const nextIndex: number = length.nextIndex + length.result;
      const textBinary: Uint8Array = binary.slice(length.nextIndex, nextIndex);
      const isBrowser: boolean =
        process === undefined || process.title === "browser";
      if (isBrowser) {
        return { result: new TextDecoder().decode(textBinary), nextIndex };
      }
      return { result: new a.TextDecoder().decode(textBinary), nextIndex };
    },
  },
};

/**
 * 日時. 0001-01-01T00:00:00.000Z to 9999-12-31T23:59:59.999Z 最小単位はミリ秒. ミリ秒の求め方は day*1000*60*60*24 + millisecond
 * @typePartIdfa64c1721a3285f112a4118b66b43712
 */
export const Time: { readonly codec: Codec<Time> } = {
  codec: {
    encode: (value: Time): ReadonlyArray<number> =>
      Int32.codec
        .encode(value.day)
        .concat(Int32.codec.encode(value.millisecond)),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Time; readonly nextIndex: number } => {
      const dayAndNextIndex: {
        readonly result: Int32;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      const millisecondAndNextIndex: {
        readonly result: Int32;
        readonly nextIndex: number;
      } = Int32.codec.decode(dayAndNextIndex.nextIndex, binary);
      return {
        result: {
          day: dayAndNextIndex.result,
          millisecond: millisecondAndNextIndex.result,
        },
        nextIndex: millisecondAndNextIndex.nextIndex,
      };
    },
  },
};

/**
 * ログインのURLを発行するために必要なデータ
 * @typePartIddb245392b9296a48a195e4bd8824dd2b
 */
export const RequestLogInUrlRequestData: {
  readonly codec: Codec<RequestLogInUrlRequestData>;
} = {
  codec: {
    encode: (value: RequestLogInUrlRequestData): ReadonlyArray<number> =>
      OpenIdConnectProvider.codec
        .encode(value.openIdConnectProvider)
        .concat(UrlData.codec.encode(value.urlData)),
    decode: (
      index: number,
      binary: Uint8Array
    ): {
      readonly result: RequestLogInUrlRequestData;
      readonly nextIndex: number;
    } => {
      const openIdConnectProviderAndNextIndex: {
        readonly result: OpenIdConnectProvider;
        readonly nextIndex: number;
      } = OpenIdConnectProvider.codec.decode(index, binary);
      const urlDataAndNextIndex: {
        readonly result: UrlData;
        readonly nextIndex: number;
      } = UrlData.codec.decode(
        openIdConnectProviderAndNextIndex.nextIndex,
        binary
      );
      return {
        result: {
          openIdConnectProvider: openIdConnectProviderAndNextIndex.result,
          urlData: urlDataAndNextIndex.result,
        },
        nextIndex: urlDataAndNextIndex.nextIndex,
      };
    },
  },
};

/**
 * ソーシャルログインを提供するプロバイダー (例: Google, GitHub)
 * @typePartId0264130f1d9473f670907755cbee50d9
 */
export const OpenIdConnectProvider: {
  /**
   * Google ( https://developers.google.com/identity/sign-in/web/ )
   */
  readonly Google: OpenIdConnectProvider;
  /**
   * GitHub ( https://developer.github.com/v3/guides/basics-of-authentication/ )
   */
  readonly GitHub: OpenIdConnectProvider;
  readonly codec: Codec<OpenIdConnectProvider>;
} = {
  Google: "Google",
  GitHub: "GitHub",
  codec: {
    encode: (value: OpenIdConnectProvider): ReadonlyArray<number> => {
      switch (value) {
        case "Google": {
          return [0];
        }
        case "GitHub": {
          return [1];
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): {
      readonly result: OpenIdConnectProvider;
      readonly nextIndex: number;
    } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        return {
          result: OpenIdConnectProvider.Google,
          nextIndex: patternIndex.nextIndex,
        };
      }
      if (patternIndex.result === 1) {
        return {
          result: OpenIdConnectProvider.GitHub,
          nextIndex: patternIndex.nextIndex,
        };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  },
};

/**
 * デバッグモードかどうか,言語とページの場所. URLとして表現されるデータ. Googleなどの検索エンジンの都合( https://support.google.com/webmasters/answer/182192?hl=ja )で,URLにページの言語を入れて,言語ごとに別のURLである必要がある. デバッグ時のホスト名は http://localhost になる
 * @typePartIddc3b3cd3f125b344fb60a91c0b184f3e
 */
export const UrlData: { readonly codec: Codec<UrlData> } = {
  codec: {
    encode: (value: UrlData): ReadonlyArray<number> =>
      ClientMode.codec
        .encode(value.clientMode)
        .concat(Location.codec.encode(value.location))
        .concat(Language.codec.encode(value.language)),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: UrlData; readonly nextIndex: number } => {
      const clientModeAndNextIndex: {
        readonly result: ClientMode;
        readonly nextIndex: number;
      } = ClientMode.codec.decode(index, binary);
      const locationAndNextIndex: {
        readonly result: Location;
        readonly nextIndex: number;
      } = Location.codec.decode(clientModeAndNextIndex.nextIndex, binary);
      const languageAndNextIndex: {
        readonly result: Language;
        readonly nextIndex: number;
      } = Language.codec.decode(locationAndNextIndex.nextIndex, binary);
      return {
        result: {
          clientMode: clientModeAndNextIndex.result,
          location: locationAndNextIndex.result,
          language: languageAndNextIndex.result,
        },
        nextIndex: languageAndNextIndex.nextIndex,
      };
    },
  },
};

/**
 * デバッグモードか, リリースモード
 * @typePartId261b20a84f5b94b93559aaf98ffc6d33
 */
export const ClientMode: {
  /**
   * デバッグモード. オリジンは http://localshot:2520
   */
  readonly DebugMode: ClientMode;
  /**
   * リリースモード. オリジンは https://definy.app
   */
  readonly Release: ClientMode;
  readonly codec: Codec<ClientMode>;
} = {
  DebugMode: "DebugMode",
  Release: "Release",
  codec: {
    encode: (value: ClientMode): ReadonlyArray<number> => {
      switch (value) {
        case "DebugMode": {
          return [0];
        }
        case "Release": {
          return [1];
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: ClientMode; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        return {
          result: ClientMode.DebugMode,
          nextIndex: patternIndex.nextIndex,
        };
      }
      if (patternIndex.result === 1) {
        return {
          result: ClientMode.Release,
          nextIndex: patternIndex.nextIndex,
        };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  },
};

/**
 * DefinyWebアプリ内での場所を示すもの. URLから求められる. URLに変換できる
 * @typePartIde830168583e34ff0750716aa6b253c5f
 */
export const Location: {
  /**
   * 最初のページ
   */
  readonly Home: Location;
  /**
   * プロジェクト作成画面
   */
  readonly CreateProject: Location;
  /**
   * プロジェクトの詳細ページ
   */
  readonly Project: (a: ProjectId) => Location;
  /**
   * ユーザーの詳細ページ
   */
  readonly User: (a: UserId) => Location;
  /**
   * アイデア詳細ページ
   */
  readonly Idea: (a: IdeaId) => Location;
  /**
   * 提案のページ
   */
  readonly Suggestion: (a: SuggestionId) => Location;
  /**
   * Definyについて説明したページ
   */
  readonly About: Location;
  /**
   * デバッグページ
   */
  readonly Debug: Location;
  readonly codec: Codec<Location>;
} = {
  Home: { _: "Home" },
  CreateProject: { _: "CreateProject" },
  Project: (projectId: ProjectId): Location => ({ _: "Project", projectId }),
  User: (userId: UserId): Location => ({ _: "User", userId }),
  Idea: (ideaId: IdeaId): Location => ({ _: "Idea", ideaId }),
  Suggestion: (suggestionId: SuggestionId): Location => ({
    _: "Suggestion",
    suggestionId,
  }),
  About: { _: "About" },
  Debug: { _: "Debug" },
  codec: {
    encode: (value: Location): ReadonlyArray<number> => {
      switch (value._) {
        case "Home": {
          return [0];
        }
        case "CreateProject": {
          return [1];
        }
        case "Project": {
          return [2].concat(ProjectId.codec.encode(value.projectId));
        }
        case "User": {
          return [3].concat(UserId.codec.encode(value.userId));
        }
        case "Idea": {
          return [4].concat(IdeaId.codec.encode(value.ideaId));
        }
        case "Suggestion": {
          return [5].concat(SuggestionId.codec.encode(value.suggestionId));
        }
        case "About": {
          return [6];
        }
        case "Debug": {
          return [7];
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Location; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        return { result: Location.Home, nextIndex: patternIndex.nextIndex };
      }
      if (patternIndex.result === 1) {
        return {
          result: Location.CreateProject,
          nextIndex: patternIndex.nextIndex,
        };
      }
      if (patternIndex.result === 2) {
        const result: {
          readonly result: ProjectId;
          readonly nextIndex: number;
        } = ProjectId.codec.decode(patternIndex.nextIndex, binary);
        return {
          result: Location.Project(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 3) {
        const result: {
          readonly result: UserId;
          readonly nextIndex: number;
        } = UserId.codec.decode(patternIndex.nextIndex, binary);
        return {
          result: Location.User(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 4) {
        const result: {
          readonly result: IdeaId;
          readonly nextIndex: number;
        } = IdeaId.codec.decode(patternIndex.nextIndex, binary);
        return {
          result: Location.Idea(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 5) {
        const result: {
          readonly result: SuggestionId;
          readonly nextIndex: number;
        } = SuggestionId.codec.decode(patternIndex.nextIndex, binary);
        return {
          result: Location.Suggestion(result.result),
          nextIndex: result.nextIndex,
        };
      }
      if (patternIndex.result === 6) {
        return { result: Location.About, nextIndex: patternIndex.nextIndex };
      }
      if (patternIndex.result === 7) {
        return { result: Location.Debug, nextIndex: patternIndex.nextIndex };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  },
};

/**
 * 英語,日本語,エスペラント語などの言語
 * @typePartIda7c52f1164c69f56625e8febd5f44bf3
 */
export const Language: {
  /**
   * 日本語
   */
  readonly Japanese: Language;
  /**
   * 英語
   */
  readonly English: Language;
  /**
   * エスペラント語
   */
  readonly Esperanto: Language;
  readonly codec: Codec<Language>;
} = {
  Japanese: "Japanese",
  English: "English",
  Esperanto: "Esperanto",
  codec: {
    encode: (value: Language): ReadonlyArray<number> => {
      switch (value) {
        case "Japanese": {
          return [0];
        }
        case "English": {
          return [1];
        }
        case "Esperanto": {
          return [2];
        }
      }
    },
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: Language; readonly nextIndex: number } => {
      const patternIndex: {
        readonly result: number;
        readonly nextIndex: number;
      } = Int32.codec.decode(index, binary);
      if (patternIndex.result === 0) {
        return { result: Language.Japanese, nextIndex: patternIndex.nextIndex };
      }
      if (patternIndex.result === 1) {
        return { result: Language.English, nextIndex: patternIndex.nextIndex };
      }
      if (patternIndex.result === 2) {
        return {
          result: Language.Esperanto,
          nextIndex: patternIndex.nextIndex,
        };
      }
      throw new Error("存在しないパターンを指定された 型を更新してください");
    },
  },
};

/**
 * プロジェクトを区別するためのID
 * @typePartId4e3ab0f9499404a5fa100c4b57835906
 */
export const ProjectId: { readonly codec: Codec<ProjectId> } = {
  codec: {
    encode: (value: ProjectId): ReadonlyArray<number> => encodeId(value),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: ProjectId; readonly nextIndex: number } =>
      decodeId(index, binary) as {
        readonly result: ProjectId;
        readonly nextIndex: number;
      },
  },
};

/**
 * ユーザーを区別するためのID
 * @typePartId5a71cddc0b95298cb57ec66089190e9b
 */
export const UserId: { readonly codec: Codec<UserId> } = {
  codec: {
    encode: (value: UserId): ReadonlyArray<number> => encodeId(value),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: UserId; readonly nextIndex: number } =>
      decodeId(index, binary) as {
        readonly result: UserId;
        readonly nextIndex: number;
      },
  },
};

/**
 * アイデアを区別するためのID
 * @typePartId719fa4020ae23a96d301d9fa31d8fcaf
 */
export const IdeaId: { readonly codec: Codec<IdeaId> } = {
  codec: {
    encode: (value: IdeaId): ReadonlyArray<number> => encodeId(value),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: IdeaId; readonly nextIndex: number } =>
      decodeId(index, binary) as {
        readonly result: IdeaId;
        readonly nextIndex: number;
      },
  },
};

/**
 * 提案を区別するためのID
 * @typePartId72cc637f6803ef5ca7536889a7fff52e
 */
export const SuggestionId: { readonly codec: Codec<SuggestionId> } = {
  codec: {
    encode: (value: SuggestionId): ReadonlyArray<number> => encodeId(value),
    decode: (
      index: number,
      binary: Uint8Array
    ): { readonly result: SuggestionId; readonly nextIndex: number } =>
      decodeId(index, binary) as {
        readonly result: SuggestionId;
        readonly nextIndex: number;
      },
  },
};

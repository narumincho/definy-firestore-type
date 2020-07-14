import * as id from "./typePartId";
import * as type from "./type";
import * as util from "../source/util";
import {
  Maybe,
  TypeAttribute,
  TypePart,
  TypePartBody,
  TypePartBodyKernel,
  TypePartId,
} from "../source/data";

const maybeValueTypePartId = "7340e6b552af43695335a64e057f4250" as TypePartId;

const resultOkTypePartId = "2163b3c97b382de8085973eff850c919" as TypePartId;
const resultErrorTypePartId = "bd8be8409130f30f15c5c86c01de6dc5" as TypePartId;

const idAndDataIdTypePartId = "fc6ea18b02d5cfa07c79182be262ad72" as TypePartId;
const idAndDataDataTypePartId = "5ca542b76f5199346931fb46caec2a85" as TypePartId;

export const typePartMap: ReadonlyMap<TypePartId, TypePart> = new Map<
  TypePartId,
  TypePart
>([
  [
    id.Int32,
    {
      name: "Int32",
      migrationPartId: Maybe.Nothing(),
      description:
        "-2 147 483 648 ～ 2 147 483 647. 32bit 符号付き整数. JavaScriptのnumberとして扱える. numberの32bit符号あり整数をSigned Leb128のバイナリに変換する",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Int32),
    },
  ],
  [
    id.Binary,
    {
      name: "Binary",
      migrationPartId: Maybe.Nothing(),
      description:
        "バイナリ. JavaScriptのUint8Arrayで扱える. 最初にLED128でバイト数, その次にバイナリそのまま",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Binary),
    },
  ],
  [
    id.Bool,
    {
      name: "Bool",
      migrationPartId: Maybe.Nothing(),
      description:
        "Bool. 真か偽. JavaScriptのbooleanで扱える. true: 1, false: 0. (1byte)としてバイナリに変換する",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Just(TypeAttribute.AsBoolean),
      typeParameterList: [],
      body: TypePartBody.Sum([
        {
          name: "True",
          description: "真",
          parameter: Maybe.Nothing(),
        },
        {
          name: "False",
          description: "偽",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.List,
    {
      name: "List",
      migrationPartId: Maybe.Nothing(),
      description: "リスト. JavaScriptのArrayで扱う",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [
        {
          name: "e",
          typePartId: "cf95a75adf60a7eecabe7d0b4c3e68cd" as TypePartId,
        },
      ],
      body: TypePartBody.Kernel(TypePartBodyKernel.List),
    },
  ],
  [
    id.Maybe,
    {
      name: "Maybe",
      migrationPartId: Maybe.Nothing(),
      description:
        "Maybe. nullableのようなもの. 今後はRustのstd::Optionに出力するために属性をつける?",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [
        {
          typePartId: maybeValueTypePartId,
          name: "value",
        },
      ],
      body: TypePartBody.Sum([
        {
          name: "Just",
          description: "値があるということ",
          parameter: Maybe.Just({
            typePartId: maybeValueTypePartId,
            parameter: [],
          }),
        },
        {
          name: "Nothing",
          description: "値がないということ",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.Result,
    {
      name: "Result",
      migrationPartId: Maybe.Nothing(),
      description:
        "成功と失敗を表す型. 今後はRustのstd::Resultに出力するために属性をつける?",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [
        {
          typePartId: resultOkTypePartId,
          name: "ok",
        },
        {
          typePartId: resultErrorTypePartId,
          name: "error",
        },
      ],
      body: TypePartBody.Sum([
        {
          name: "Ok",
          description: "成功",
          parameter: Maybe.Just({
            typePartId: resultOkTypePartId,
            parameter: [],
          }),
        },
        {
          name: "Error",
          description: "失敗",
          parameter: Maybe.Just({
            typePartId: resultErrorTypePartId,
            parameter: [],
          }),
        },
      ]),
    },
  ],
  [
    id.String,
    {
      name: "String",
      migrationPartId: Maybe.Nothing(),
      description:
        "文字列. JavaScriptのstringで扱う. バイナリ形式はUTF-8. 不正な文字が入っている可能性がある",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.String),
    },
  ],
  [
    id.Time,
    {
      name: "Time",
      migrationPartId: Maybe.Nothing(),
      description:
        "日時. 0001-01-01T00:00:00.000Z to 9999-12-31T23:59:59.999Z 最小単位はミリ秒. ミリ秒の求め方は day*1000*60*60*24 + millisecond",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      typeParameterList: [],
      attribute: Maybe.Nothing(),
      body: TypePartBody.Product([
        {
          name: "day",
          description: "1970-01-01からの経過日数. マイナスになることもある",
          type: type.Int32,
        },
        {
          name: "millisecond",
          description: "日にちの中のミリ秒. 0 to 86399999 (=1000*60*60*24-1)",
          type: type.Int32,
        },
      ]),
    },
  ],
  [
    id.RequestLogInUrlRequestData,
    {
      name: "RequestLogInUrlRequestData",
      migrationPartId: Maybe.Nothing(),
      description: "ログインのURLを発行するために必要なデータ",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      typeParameterList: [],
      attribute: Maybe.Nothing(),
      body: TypePartBody.Product([
        {
          name: "openIdConnectProvider",
          description: "ログインに使用するプロバイダー",
          type: type.OpenIdConnectProvider,
        },
        {
          name: "urlData",
          description: "ログインした後に返ってくるURLに必要なデータ",
          type: type.UrlData,
        },
      ]),
    },
  ],
  [
    id.OpenIdConnectProvider,
    {
      name: "OpenIdConnectProvider",
      migrationPartId: Maybe.Nothing(),
      description:
        "ソーシャルログインを提供するプロバイダー (例: Google, GitHub)",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      typeParameterList: [],
      attribute: Maybe.Nothing(),
      body: TypePartBody.Sum([
        {
          name: "Google",
          description:
            "Google ( https://developers.google.com/identity/sign-in/web/ )",
          parameter: Maybe.Nothing(),
        },
        {
          name: "GitHub",
          description:
            "GitHub ( https://developer.github.com/v3/guides/basics-of-authentication/ )",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.UrlData,
    {
      name: "UrlData",
      migrationPartId: Maybe.Nothing(),
      description:
        "デバッグモードかどうか,言語とページの場所. URLとして表現されるデータ. Googleなどの検索エンジンの都合( https://support.google.com/webmasters/answer/182192?hl=ja )で,URLにページの言語を入れて,言語ごとに別のURLである必要がある. デバッグ時のホスト名は http://localhost になる",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Product([
        {
          name: "clientMode",
          description: "クライアントモード",
          type: type.ClientMode,
        },
        {
          name: "location",
          description: "場所",
          type: type.Location,
        },
        {
          name: "language",
          description: "言語",
          type: type.Language,
        },
      ]),
    },
  ],
  [
    id.ClientMode,
    {
      name: "ClientMode",
      migrationPartId: Maybe.Nothing(),
      description: "デバッグモードか, リリースモード",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Sum([
        {
          name: "DebugMode",
          description: "デバッグモード. オリジンは http://localshot:2520",
          parameter: Maybe.Nothing(),
        },
        {
          name: "Release",
          description: "リリースモード. オリジンは https://definy.app ",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.Location,
    {
      name: "Location",
      migrationPartId: Maybe.Nothing(),
      description:
        "DefinyWebアプリ内での場所を示すもの. URLから求められる. URLに変換できる",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Sum([
        {
          name: "Home",
          description: "最初のページ",
          parameter: Maybe.Nothing(),
        },
        {
          name: "CreateProject",
          description: "プロジェクト作成画面",
          parameter: Maybe.Nothing(),
        },
        {
          name: "Project",
          description: "プロジェクトの詳細ページ",
          parameter: Maybe.Just(type.ProjectId),
        },
        {
          name: "User",
          description: "ユーザーの詳細ページ",
          parameter: Maybe.Just(type.UserId),
        },
        {
          name: "Idea",
          description: "アイデア詳細ページ",
          parameter: Maybe.Just(type.IdeaId),
        },
        {
          name: "Suggestion",
          description: "提案のページ",
          parameter: Maybe.Just(type.SuggestionId),
        },
        {
          name: "About",
          description: "Definyについて説明したページ",
          parameter: Maybe.Nothing(),
        },
        {
          name: "Debug",
          description: "デバッグページ",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.Language,
    {
      name: "Language",
      migrationPartId: Maybe.Nothing(),
      description: "英語,日本語,エスペラント語などの言語",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Sum([
        {
          name: "Japanese",
          description: "日本語",
          parameter: Maybe.Nothing(),
        },
        {
          name: "English",
          description: "英語",
          parameter: Maybe.Nothing(),
        },
        {
          name: "Esperanto",
          description: "エスペラント語",
          parameter: Maybe.Nothing(),
        },
      ]),
    },
  ],
  [
    id.User,
    {
      name: "User",
      migrationPartId: Maybe.Nothing(),
      description: "ユーザーのデータのスナップショット",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Product([
        {
          name: "name",
          description:
            "ユーザー名. 表示される名前. 他のユーザーとかぶっても良い. 絵文字も使える. 全角英数は半角英数,半角カタカナは全角カタカナ, (株)の合字を分解するなどのNFKCの正規化がされる. U+0000-U+0019 と U+007F-U+00A0 の範囲の文字は入らない. 前後に空白を含められない. 間の空白は2文字以上連続しない. 文字数のカウント方法は正規化されたあとのCodePoint単位. Twitterと同じ, 1文字以上50文字以下",
          type: type.String,
        },
        {
          name: "imageHash",
          description: "プロフィール画像",
          type: type.ImageToken,
        },
        {
          name: "introduction",
          description:
            "自己紹介文. 改行文字を含めることができる. Twitterと同じ 0～160文字",
          type: type.String,
        },
        {
          name: "createTime",
          description: "Definyでユーザーが作成された日時",
          type: type.Time,
        },
        {
          name: "likeProjectIdList",
          description: "プロジェクトに対する いいね",
          type: type.List(type.ProjectId),
        },
        {
          name: "developProjectIdList",
          description: "開発に参加した (書いたコードが使われた) プロジェクト",
          type: type.List(type.ProjectId),
        },
        {
          name: "commentIdeaIdList",
          description: "コメントをしたアイデア",
          type: type.List(type.IdeaId),
        },
        {
          name: "getTime",
          description: "取得日時",
          type: type.Time,
        },
      ]),
    },
  ],
  [
    id.IdAndData,
    {
      name: "IdAndData",
      migrationPartId: Maybe.Nothing(),
      description: "データを識別するIdとデータ",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [
        { name: "id", typePartId: idAndDataIdTypePartId },
        { name: "data", typePartId: idAndDataDataTypePartId },
      ],
      body: TypePartBody.Product([
        {
          name: "id",
          description: "ID",
          type: { typePartId: idAndDataIdTypePartId, parameter: [] },
        },
        {
          name: "data",
          description: "データ",
          type: { typePartId: idAndDataDataTypePartId, parameter: [] },
        },
      ]),
    },
  ],
  [
    id.ProjectId,
    {
      name: "ProjectId",
      migrationPartId: Maybe.Nothing(),
      description: "プロジェクトを区別するためのID",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Id),
    },
  ],
  [
    id.UserId,
    {
      name: "UserId",
      migrationPartId: Maybe.Nothing(),
      description: "ユーザーを区別するためのID",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Id),
    },
  ],
  [
    id.IdeaId,
    {
      name: "IdeaId",
      migrationPartId: Maybe.Nothing(),
      description: "アイデアを区別するためのID",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Id),
    },
  ],
  [
    id.SuggestionId,
    {
      name: "SuggestionId",
      migrationPartId: Maybe.Nothing(),
      description: "提案を区別するためのID",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Id),
    },
  ],
  [
    id.ImageToken,
    {
      name: "ImageToken",
      migrationPartId: Maybe.Nothing(),
      description:
        "画像から求められるトークン.キャッシュのキーとして使われる.1つのトークンに対して永久に1つの画像データしか表さない. キャッシュを更新する必要はない",
      projectId: util.definyCodeProjectId,
      createSuggestionId: util.codeSuggestionId,
      getTime: { day: 0, millisecond: 0 },
      attribute: Maybe.Nothing(),
      typeParameterList: [],
      body: TypePartBody.Kernel(TypePartBodyKernel.Id),
    },
  ],
]);
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Budget = Node & {
  __typename?: 'Budget';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** descrição do orçamento */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Budget>;
  /** List of Budget versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** url da imagem */
  imageURL?: Maybe<Scalars['String']>;
  items: Array<BudgetItems>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BudgetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BudgetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BudgetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type BudgetItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type BudgetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BudgetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BudgetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BudgetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BudgetWhereUniqueInput;
};

/** A connection to a list of items. */
export type BudgetConnection = {
  __typename?: 'BudgetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BudgetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BudgetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<BudgetItemsCreateManyInlineInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BudgetCreateManyInlineInput = {
  /** Connect multiple existing Budget documents */
  connect?: InputMaybe<Array<BudgetWhereUniqueInput>>;
  /** Create and connect multiple existing Budget documents */
  create?: InputMaybe<Array<BudgetCreateInput>>;
};

export type BudgetCreateOneInlineInput = {
  /** Connect one existing Budget document */
  connect?: InputMaybe<BudgetWhereUniqueInput>;
  /** Create and connect one Budget document */
  create?: InputMaybe<BudgetCreateInput>;
};

/** An edge in a connection. */
export type BudgetEdge = {
  __typename?: 'BudgetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Budget;
};

export type BudgetItem = Node & {
  __typename?: 'BudgetItem';
  budget?: Maybe<Budget>;
  budgetType?: Maybe<BudgetType>;
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<BudgetItem>;
  /** List of BudgetItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageURL?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BudgetItemBudgetArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BudgetItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BudgetItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BudgetItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type BudgetItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BudgetItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BudgetItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BudgetItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BudgetItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type BudgetItemConnection = {
  __typename?: 'BudgetItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BudgetItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BudgetItemCreateInput = {
  budget?: InputMaybe<BudgetCreateOneInlineInput>;
  budgetType?: InputMaybe<BudgetType>;
  category?: InputMaybe<Category>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  imageURL?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BudgetItemCreateManyInlineInput = {
  /** Connect multiple existing BudgetItem documents */
  connect?: InputMaybe<Array<BudgetItemWhereUniqueInput>>;
  /** Create and connect multiple existing BudgetItem documents */
  create?: InputMaybe<Array<BudgetItemCreateInput>>;
};

export type BudgetItemCreateOneInlineInput = {
  /** Connect one existing BudgetItem document */
  connect?: InputMaybe<BudgetItemWhereUniqueInput>;
  /** Create and connect one BudgetItem document */
  create?: InputMaybe<BudgetItemCreateInput>;
};

/** An edge in a connection. */
export type BudgetItemEdge = {
  __typename?: 'BudgetItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BudgetItem;
};

/** Identifies documents */
export type BudgetItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<BudgetWhereInput>;
  budgetType?: InputMaybe<BudgetType>;
  /** All values that are contained in given list. */
  budgetType_in?: InputMaybe<Array<InputMaybe<BudgetType>>>;
  /** All values that are not equal to given value. */
  budgetType_not?: InputMaybe<BudgetType>;
  /** All values that are not contained in given list. */
  budgetType_not_in?: InputMaybe<Array<InputMaybe<BudgetType>>>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Category>>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Category>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageURL_starts_with?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BudgetItemOrderByInput {
  BudgetTypeAsc = 'budgetType_ASC',
  BudgetTypeDesc = 'budgetType_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageURL_ASC',
  ImageUrlDesc = 'imageURL_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BudgetItemUpdateInput = {
  budget?: InputMaybe<BudgetUpdateOneInlineInput>;
  budgetType?: InputMaybe<BudgetType>;
  category?: InputMaybe<Category>;
  imageURL?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type BudgetItemUpdateManyInlineInput = {
  /** Connect multiple existing BudgetItem documents */
  connect?: InputMaybe<Array<BudgetItemConnectInput>>;
  /** Create and connect multiple BudgetItem documents */
  create?: InputMaybe<Array<BudgetItemCreateInput>>;
  /** Delete multiple BudgetItem documents */
  delete?: InputMaybe<Array<BudgetItemWhereUniqueInput>>;
  /** Disconnect multiple BudgetItem documents */
  disconnect?: InputMaybe<Array<BudgetItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BudgetItem documents */
  set?: InputMaybe<Array<BudgetItemWhereUniqueInput>>;
  /** Update multiple BudgetItem documents */
  update?: InputMaybe<Array<BudgetItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BudgetItem documents */
  upsert?: InputMaybe<Array<BudgetItemUpsertWithNestedWhereUniqueInput>>;
};

export type BudgetItemUpdateManyInput = {
  budgetType?: InputMaybe<BudgetType>;
  category?: InputMaybe<Category>;
  imageURL?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type BudgetItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BudgetItemUpdateManyInput;
  /** Document search */
  where: BudgetItemWhereInput;
};

export type BudgetItemUpdateOneInlineInput = {
  /** Connect existing BudgetItem document */
  connect?: InputMaybe<BudgetItemWhereUniqueInput>;
  /** Create and connect one BudgetItem document */
  create?: InputMaybe<BudgetItemCreateInput>;
  /** Delete currently connected BudgetItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected BudgetItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single BudgetItem document */
  update?: InputMaybe<BudgetItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BudgetItem document */
  upsert?: InputMaybe<BudgetItemUpsertWithNestedWhereUniqueInput>;
};

export type BudgetItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BudgetItemUpdateInput;
  /** Unique document search */
  where: BudgetItemWhereUniqueInput;
};

export type BudgetItemUpsertInput = {
  /** Create document if it didn't exist */
  create: BudgetItemCreateInput;
  /** Update document if it exists */
  update: BudgetItemUpdateInput;
};

export type BudgetItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BudgetItemUpsertInput;
  /** Unique document search */
  where: BudgetItemWhereUniqueInput;
};

/** Identifies documents */
export type BudgetItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BudgetItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<BudgetWhereInput>;
  budgetType?: InputMaybe<BudgetType>;
  /** All values that are contained in given list. */
  budgetType_in?: InputMaybe<Array<InputMaybe<BudgetType>>>;
  /** All values that are not equal to given value. */
  budgetType_not?: InputMaybe<BudgetType>;
  /** All values that are not contained in given list. */
  budgetType_not_in?: InputMaybe<Array<InputMaybe<BudgetType>>>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<InputMaybe<Category>>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<InputMaybe<Category>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageURL_starts_with?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References BudgetItem record uniquely */
export type BudgetItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BudgetItems = BudgetItem;

export type BudgetItemsConnectInput = {
  BudgetItem?: InputMaybe<BudgetItemConnectInput>;
};

export type BudgetItemsCreateInput = {
  BudgetItem?: InputMaybe<BudgetItemCreateInput>;
};

export type BudgetItemsCreateManyInlineInput = {
  /** Connect multiple existing BudgetItems documents */
  connect?: InputMaybe<Array<BudgetItemsWhereUniqueInput>>;
  /** Create and connect multiple existing BudgetItems documents */
  create?: InputMaybe<Array<BudgetItemsCreateInput>>;
};

export type BudgetItemsCreateOneInlineInput = {
  /** Connect one existing BudgetItems document */
  connect?: InputMaybe<BudgetItemsWhereUniqueInput>;
  /** Create and connect one BudgetItems document */
  create?: InputMaybe<BudgetItemsCreateInput>;
};

export type BudgetItemsUpdateInput = {
  BudgetItem?: InputMaybe<BudgetItemUpdateInput>;
};

export type BudgetItemsUpdateManyInlineInput = {
  /** Connect multiple existing BudgetItems documents */
  connect?: InputMaybe<Array<BudgetItemsConnectInput>>;
  /** Create and connect multiple BudgetItems documents */
  create?: InputMaybe<Array<BudgetItemsCreateInput>>;
  /** Delete multiple BudgetItems documents */
  delete?: InputMaybe<Array<BudgetItemsWhereUniqueInput>>;
  /** Disconnect multiple BudgetItems documents */
  disconnect?: InputMaybe<Array<BudgetItemsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing BudgetItems documents */
  set?: InputMaybe<Array<BudgetItemsWhereUniqueInput>>;
  /** Update multiple BudgetItems documents */
  update?: InputMaybe<Array<BudgetItemsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple BudgetItems documents */
  upsert?: InputMaybe<Array<BudgetItemsUpsertWithNestedWhereUniqueInput>>;
};

export type BudgetItemsUpdateManyWithNestedWhereInput = {
  BudgetItem?: InputMaybe<BudgetItemUpdateManyWithNestedWhereInput>;
};

export type BudgetItemsUpdateOneInlineInput = {
  /** Connect existing BudgetItems document */
  connect?: InputMaybe<BudgetItemsWhereUniqueInput>;
  /** Create and connect one BudgetItems document */
  create?: InputMaybe<BudgetItemsCreateInput>;
  /** Delete currently connected BudgetItems document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected BudgetItems document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single BudgetItems document */
  update?: InputMaybe<BudgetItemsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single BudgetItems document */
  upsert?: InputMaybe<BudgetItemsUpsertWithNestedWhereUniqueInput>;
};

export type BudgetItemsUpdateWithNestedWhereUniqueInput = {
  BudgetItem?: InputMaybe<BudgetItemUpdateWithNestedWhereUniqueInput>;
};

export type BudgetItemsUpsertWithNestedWhereUniqueInput = {
  BudgetItem?: InputMaybe<BudgetItemUpsertWithNestedWhereUniqueInput>;
};

export type BudgetItemsWhereInput = {
  BudgetItem?: InputMaybe<BudgetItemWhereInput>;
};

export type BudgetItemsWhereUniqueInput = {
  BudgetItem?: InputMaybe<BudgetItemWhereUniqueInput>;
};

/** Identifies documents */
export type BudgetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BudgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BudgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BudgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageURL_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BudgetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageURL_ASC',
  ImageUrlDesc = 'imageURL_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum BudgetType {
  Purchased = 'purchased',
  Saved = 'saved',
  Wishlist = 'wishlist'
}

export type BudgetUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<BudgetItemsUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type BudgetUpdateManyInlineInput = {
  /** Connect multiple existing Budget documents */
  connect?: InputMaybe<Array<BudgetConnectInput>>;
  /** Create and connect multiple Budget documents */
  create?: InputMaybe<Array<BudgetCreateInput>>;
  /** Delete multiple Budget documents */
  delete?: InputMaybe<Array<BudgetWhereUniqueInput>>;
  /** Disconnect multiple Budget documents */
  disconnect?: InputMaybe<Array<BudgetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Budget documents */
  set?: InputMaybe<Array<BudgetWhereUniqueInput>>;
  /** Update multiple Budget documents */
  update?: InputMaybe<Array<BudgetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Budget documents */
  upsert?: InputMaybe<Array<BudgetUpsertWithNestedWhereUniqueInput>>;
};

export type BudgetUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BudgetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BudgetUpdateManyInput;
  /** Document search */
  where: BudgetWhereInput;
};

export type BudgetUpdateOneInlineInput = {
  /** Connect existing Budget document */
  connect?: InputMaybe<BudgetWhereUniqueInput>;
  /** Create and connect one Budget document */
  create?: InputMaybe<BudgetCreateInput>;
  /** Delete currently connected Budget document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Budget document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Budget document */
  update?: InputMaybe<BudgetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Budget document */
  upsert?: InputMaybe<BudgetUpsertWithNestedWhereUniqueInput>;
};

export type BudgetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BudgetUpdateInput;
  /** Unique document search */
  where: BudgetWhereUniqueInput;
};

export type BudgetUpsertInput = {
  /** Create document if it didn't exist */
  create: BudgetCreateInput;
  /** Update document if it exists */
  update: BudgetUpdateInput;
};

export type BudgetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BudgetUpsertInput;
  /** Unique document search */
  where: BudgetWhereUniqueInput;
};

/** Identifies documents */
export type BudgetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BudgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BudgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BudgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageURL_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Budget record uniquely */
export type BudgetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum Category {
  Banho = 'Banho',
  Cama = 'Cama',
  Cozinha = 'Cozinha',
  Outros = 'Outros',
  Quarto = 'Quarto',
  Quintal = 'Quintal',
  Roupa = 'Roupa',
  Sala = 'Sala'
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Guest = Node & {
  __typename?: 'Guest';
  confirmationCode: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Guest>;
  /** List of Guest versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  list: Array<GuestList>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  response?: Maybe<Scalars['Boolean']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type GuestCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GuestHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GuestListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestListWhereInput>;
};


export type GuestPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GuestUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type GuestConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GuestWhereUniqueInput;
};

/** A connection to a list of items. */
export type GuestConnection = {
  __typename?: 'GuestConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GuestEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GuestCreateInput = {
  confirmationCode: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  list?: InputMaybe<GuestListCreateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuestCreateManyInlineInput = {
  /** Connect multiple existing Guest documents */
  connect?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Create and connect multiple existing Guest documents */
  create?: InputMaybe<Array<GuestCreateInput>>;
};

export type GuestCreateOneInlineInput = {
  /** Connect one existing Guest document */
  connect?: InputMaybe<GuestWhereUniqueInput>;
  /** Create and connect one Guest document */
  create?: InputMaybe<GuestCreateInput>;
};

/** An edge in a connection. */
export type GuestEdge = {
  __typename?: 'GuestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Guest;
};

export type GuestList = Node & {
  __typename?: 'GuestList';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<GuestList>;
  /** List of GuestList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  items: Array<GuestListItems>;
  listName?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type GuestListCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GuestListHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GuestListItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GuestListPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GuestListUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type GuestListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GuestListWhereUniqueInput;
};

/** A connection to a list of items. */
export type GuestListConnection = {
  __typename?: 'GuestListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GuestListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GuestListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<GuestListItemsCreateManyInlineInput>;
  listName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuestListCreateManyInlineInput = {
  /** Connect multiple existing GuestList documents */
  connect?: InputMaybe<Array<GuestListWhereUniqueInput>>;
  /** Create and connect multiple existing GuestList documents */
  create?: InputMaybe<Array<GuestListCreateInput>>;
};

export type GuestListCreateOneInlineInput = {
  /** Connect one existing GuestList document */
  connect?: InputMaybe<GuestListWhereUniqueInput>;
  /** Create and connect one GuestList document */
  create?: InputMaybe<GuestListCreateInput>;
};

/** An edge in a connection. */
export type GuestListEdge = {
  __typename?: 'GuestListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GuestList;
};

export type GuestListItems = Guest;

export type GuestListItemsConnectInput = {
  Guest?: InputMaybe<GuestConnectInput>;
};

export type GuestListItemsCreateInput = {
  Guest?: InputMaybe<GuestCreateInput>;
};

export type GuestListItemsCreateManyInlineInput = {
  /** Connect multiple existing GuestListItems documents */
  connect?: InputMaybe<Array<GuestListItemsWhereUniqueInput>>;
  /** Create and connect multiple existing GuestListItems documents */
  create?: InputMaybe<Array<GuestListItemsCreateInput>>;
};

export type GuestListItemsCreateOneInlineInput = {
  /** Connect one existing GuestListItems document */
  connect?: InputMaybe<GuestListItemsWhereUniqueInput>;
  /** Create and connect one GuestListItems document */
  create?: InputMaybe<GuestListItemsCreateInput>;
};

export type GuestListItemsUpdateInput = {
  Guest?: InputMaybe<GuestUpdateInput>;
};

export type GuestListItemsUpdateManyInlineInput = {
  /** Connect multiple existing GuestListItems documents */
  connect?: InputMaybe<Array<GuestListItemsConnectInput>>;
  /** Create and connect multiple GuestListItems documents */
  create?: InputMaybe<Array<GuestListItemsCreateInput>>;
  /** Delete multiple GuestListItems documents */
  delete?: InputMaybe<Array<GuestListItemsWhereUniqueInput>>;
  /** Disconnect multiple GuestListItems documents */
  disconnect?: InputMaybe<Array<GuestListItemsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GuestListItems documents */
  set?: InputMaybe<Array<GuestListItemsWhereUniqueInput>>;
  /** Update multiple GuestListItems documents */
  update?: InputMaybe<Array<GuestListItemsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GuestListItems documents */
  upsert?: InputMaybe<Array<GuestListItemsUpsertWithNestedWhereUniqueInput>>;
};

export type GuestListItemsUpdateManyWithNestedWhereInput = {
  Guest?: InputMaybe<GuestUpdateManyWithNestedWhereInput>;
};

export type GuestListItemsUpdateOneInlineInput = {
  /** Connect existing GuestListItems document */
  connect?: InputMaybe<GuestListItemsWhereUniqueInput>;
  /** Create and connect one GuestListItems document */
  create?: InputMaybe<GuestListItemsCreateInput>;
  /** Delete currently connected GuestListItems document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected GuestListItems document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single GuestListItems document */
  update?: InputMaybe<GuestListItemsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GuestListItems document */
  upsert?: InputMaybe<GuestListItemsUpsertWithNestedWhereUniqueInput>;
};

export type GuestListItemsUpdateWithNestedWhereUniqueInput = {
  Guest?: InputMaybe<GuestUpdateWithNestedWhereUniqueInput>;
};

export type GuestListItemsUpsertWithNestedWhereUniqueInput = {
  Guest?: InputMaybe<GuestUpsertWithNestedWhereUniqueInput>;
};

export type GuestListItemsWhereInput = {
  Guest?: InputMaybe<GuestWhereInput>;
};

export type GuestListItemsWhereUniqueInput = {
  Guest?: InputMaybe<GuestWhereUniqueInput>;
};

/** Identifies documents */
export type GuestListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: InputMaybe<Scalars['String']>;
  listName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  listName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  listName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  listName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  listName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  listName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  listName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  listName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  listName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  listName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GuestListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC',
  ListNameAsc = 'listName_ASC',
  ListNameDesc = 'listName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GuestListUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<GuestListItemsUpdateManyInlineInput>;
  listName?: InputMaybe<Scalars['String']>;
};

export type GuestListUpdateManyInlineInput = {
  /** Connect multiple existing GuestList documents */
  connect?: InputMaybe<Array<GuestListConnectInput>>;
  /** Create and connect multiple GuestList documents */
  create?: InputMaybe<Array<GuestListCreateInput>>;
  /** Delete multiple GuestList documents */
  delete?: InputMaybe<Array<GuestListWhereUniqueInput>>;
  /** Disconnect multiple GuestList documents */
  disconnect?: InputMaybe<Array<GuestListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GuestList documents */
  set?: InputMaybe<Array<GuestListWhereUniqueInput>>;
  /** Update multiple GuestList documents */
  update?: InputMaybe<Array<GuestListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GuestList documents */
  upsert?: InputMaybe<Array<GuestListUpsertWithNestedWhereUniqueInput>>;
};

export type GuestListUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  listName?: InputMaybe<Scalars['String']>;
};

export type GuestListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GuestListUpdateManyInput;
  /** Document search */
  where: GuestListWhereInput;
};

export type GuestListUpdateOneInlineInput = {
  /** Connect existing GuestList document */
  connect?: InputMaybe<GuestListWhereUniqueInput>;
  /** Create and connect one GuestList document */
  create?: InputMaybe<GuestListCreateInput>;
  /** Delete currently connected GuestList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected GuestList document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single GuestList document */
  update?: InputMaybe<GuestListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GuestList document */
  upsert?: InputMaybe<GuestListUpsertWithNestedWhereUniqueInput>;
};

export type GuestListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GuestListUpdateInput;
  /** Unique document search */
  where: GuestListWhereUniqueInput;
};

export type GuestListUpsertInput = {
  /** Create document if it didn't exist */
  create: GuestListCreateInput;
  /** Update document if it exists */
  update: GuestListUpdateInput;
};

export type GuestListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GuestListUpsertInput;
  /** Unique document search */
  where: GuestListWhereUniqueInput;
};

/** Identifies documents */
export type GuestListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imageUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: InputMaybe<Scalars['String']>;
  listName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  listName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  listName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  listName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  listName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  listName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  listName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  listName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  listName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  listName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References GuestList record uniquely */
export type GuestListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type GuestManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  confirmationCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  confirmationCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  confirmationCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  confirmationCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  confirmationCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  confirmationCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  confirmationCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  confirmationCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  confirmationCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  confirmationCode_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  list_every?: InputMaybe<GuestListWhereInput>;
  list_none?: InputMaybe<GuestListWhereInput>;
  list_some?: InputMaybe<GuestListWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  response?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  response_not?: InputMaybe<Scalars['Boolean']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GuestOrderByInput {
  ConfirmationCodeAsc = 'confirmationCode_ASC',
  ConfirmationCodeDesc = 'confirmationCode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ResponseAsc = 'response_ASC',
  ResponseDesc = 'response_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GuestUpdateInput = {
  confirmationCode?: InputMaybe<Scalars['String']>;
  list?: InputMaybe<GuestListUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['Boolean']>;
};

export type GuestUpdateManyInlineInput = {
  /** Connect multiple existing Guest documents */
  connect?: InputMaybe<Array<GuestConnectInput>>;
  /** Create and connect multiple Guest documents */
  create?: InputMaybe<Array<GuestCreateInput>>;
  /** Delete multiple Guest documents */
  delete?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Disconnect multiple Guest documents */
  disconnect?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Guest documents */
  set?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Update multiple Guest documents */
  update?: InputMaybe<Array<GuestUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Guest documents */
  upsert?: InputMaybe<Array<GuestUpsertWithNestedWhereUniqueInput>>;
};

export type GuestUpdateManyInput = {
  response?: InputMaybe<Scalars['Boolean']>;
};

export type GuestUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GuestUpdateManyInput;
  /** Document search */
  where: GuestWhereInput;
};

export type GuestUpdateOneInlineInput = {
  /** Connect existing Guest document */
  connect?: InputMaybe<GuestWhereUniqueInput>;
  /** Create and connect one Guest document */
  create?: InputMaybe<GuestCreateInput>;
  /** Delete currently connected Guest document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Guest document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Guest document */
  update?: InputMaybe<GuestUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Guest document */
  upsert?: InputMaybe<GuestUpsertWithNestedWhereUniqueInput>;
};

export type GuestUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GuestUpdateInput;
  /** Unique document search */
  where: GuestWhereUniqueInput;
};

export type GuestUpsertInput = {
  /** Create document if it didn't exist */
  create: GuestCreateInput;
  /** Update document if it exists */
  update: GuestUpdateInput;
};

export type GuestUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GuestUpsertInput;
  /** Unique document search */
  where: GuestWhereUniqueInput;
};

/** Identifies documents */
export type GuestWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  confirmationCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  confirmationCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  confirmationCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  confirmationCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  confirmationCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  confirmationCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  confirmationCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  confirmationCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  confirmationCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  confirmationCode_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  list_every?: InputMaybe<GuestListWhereInput>;
  list_none?: InputMaybe<GuestListWhereInput>;
  list_some?: InputMaybe<GuestListWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  response?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  response_not?: InputMaybe<Scalars['Boolean']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Guest record uniquely */
export type GuestWhereUniqueInput = {
  confirmationCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  PtBr = 'pt_BR'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one budget */
  createBudget?: Maybe<Budget>;
  /** Create one budgetItem */
  createBudgetItem?: Maybe<BudgetItem>;
  /** Create one guest */
  createGuest?: Maybe<Guest>;
  /** Create one guestList */
  createGuestList?: Maybe<GuestList>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one budget from _all_ existing stages. Returns deleted document. */
  deleteBudget?: Maybe<Budget>;
  /** Delete one budgetItem from _all_ existing stages. Returns deleted document. */
  deleteBudgetItem?: Maybe<BudgetItem>;
  /** Delete one guest from _all_ existing stages. Returns deleted document. */
  deleteGuest?: Maybe<Guest>;
  /** Delete one guestList from _all_ existing stages. Returns deleted document. */
  deleteGuestList?: Maybe<GuestList>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many BudgetItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyBudgetItemsConnection)
   */
  deleteManyBudgetItems: BatchPayload;
  /** Delete many BudgetItem documents, return deleted documents */
  deleteManyBudgetItemsConnection: BudgetItemConnection;
  /**
   * Delete many Budget documents
   * @deprecated Please use the new paginated many mutation (deleteManyBudgetsConnection)
   */
  deleteManyBudgets: BatchPayload;
  /** Delete many Budget documents, return deleted documents */
  deleteManyBudgetsConnection: BudgetConnection;
  /**
   * Delete many GuestList documents
   * @deprecated Please use the new paginated many mutation (deleteManyGuestListsConnection)
   */
  deleteManyGuestLists: BatchPayload;
  /** Delete many GuestList documents, return deleted documents */
  deleteManyGuestListsConnection: GuestListConnection;
  /**
   * Delete many Guest documents
   * @deprecated Please use the new paginated many mutation (deleteManyGuestsConnection)
   */
  deleteManyGuests: BatchPayload;
  /** Delete many Guest documents, return deleted documents */
  deleteManyGuestsConnection: GuestConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one budget */
  publishBudget?: Maybe<Budget>;
  /** Publish one budgetItem */
  publishBudgetItem?: Maybe<BudgetItem>;
  /** Publish one guest */
  publishGuest?: Maybe<Guest>;
  /** Publish one guestList */
  publishGuestList?: Maybe<GuestList>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many BudgetItem documents
   * @deprecated Please use the new paginated many mutation (publishManyBudgetItemsConnection)
   */
  publishManyBudgetItems: BatchPayload;
  /** Publish many BudgetItem documents */
  publishManyBudgetItemsConnection: BudgetItemConnection;
  /**
   * Publish many Budget documents
   * @deprecated Please use the new paginated many mutation (publishManyBudgetsConnection)
   */
  publishManyBudgets: BatchPayload;
  /** Publish many Budget documents */
  publishManyBudgetsConnection: BudgetConnection;
  /**
   * Publish many GuestList documents
   * @deprecated Please use the new paginated many mutation (publishManyGuestListsConnection)
   */
  publishManyGuestLists: BatchPayload;
  /** Publish many GuestList documents */
  publishManyGuestListsConnection: GuestListConnection;
  /**
   * Publish many Guest documents
   * @deprecated Please use the new paginated many mutation (publishManyGuestsConnection)
   */
  publishManyGuests: BatchPayload;
  /** Publish many Guest documents */
  publishManyGuestsConnection: GuestConnection;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one budget */
  schedulePublishBudget?: Maybe<Budget>;
  /** Schedule to publish one budgetItem */
  schedulePublishBudgetItem?: Maybe<BudgetItem>;
  /** Schedule to publish one guest */
  schedulePublishGuest?: Maybe<Guest>;
  /** Schedule to publish one guestList */
  schedulePublishGuestList?: Maybe<GuestList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one budget from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBudget?: Maybe<Budget>;
  /** Unpublish one budgetItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBudgetItem?: Maybe<BudgetItem>;
  /** Unpublish one guest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGuest?: Maybe<Guest>;
  /** Unpublish one guestList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGuestList?: Maybe<GuestList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one budget from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBudget?: Maybe<Budget>;
  /** Unpublish one budgetItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBudgetItem?: Maybe<BudgetItem>;
  /** Unpublish one guest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGuest?: Maybe<Guest>;
  /** Unpublish one guestList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGuestList?: Maybe<GuestList>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many BudgetItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBudgetItemsConnection)
   */
  unpublishManyBudgetItems: BatchPayload;
  /** Find many BudgetItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBudgetItemsConnection: BudgetItemConnection;
  /**
   * Unpublish many Budget documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBudgetsConnection)
   */
  unpublishManyBudgets: BatchPayload;
  /** Find many Budget documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBudgetsConnection: BudgetConnection;
  /**
   * Unpublish many GuestList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGuestListsConnection)
   */
  unpublishManyGuestLists: BatchPayload;
  /** Find many GuestList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGuestListsConnection: GuestListConnection;
  /**
   * Unpublish many Guest documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGuestsConnection)
   */
  unpublishManyGuests: BatchPayload;
  /** Find many Guest documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGuestsConnection: GuestConnection;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one budget */
  updateBudget?: Maybe<Budget>;
  /** Update one budgetItem */
  updateBudgetItem?: Maybe<BudgetItem>;
  /** Update one guest */
  updateGuest?: Maybe<Guest>;
  /** Update one guestList */
  updateGuestList?: Maybe<GuestList>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many budgetItems
   * @deprecated Please use the new paginated many mutation (updateManyBudgetItemsConnection)
   */
  updateManyBudgetItems: BatchPayload;
  /** Update many BudgetItem documents */
  updateManyBudgetItemsConnection: BudgetItemConnection;
  /**
   * Update many budgets
   * @deprecated Please use the new paginated many mutation (updateManyBudgetsConnection)
   */
  updateManyBudgets: BatchPayload;
  /** Update many Budget documents */
  updateManyBudgetsConnection: BudgetConnection;
  /**
   * Update many guestLists
   * @deprecated Please use the new paginated many mutation (updateManyGuestListsConnection)
   */
  updateManyGuestLists: BatchPayload;
  /** Update many GuestList documents */
  updateManyGuestListsConnection: GuestListConnection;
  /**
   * Update many guests
   * @deprecated Please use the new paginated many mutation (updateManyGuestsConnection)
   */
  updateManyGuests: BatchPayload;
  /** Update many Guest documents */
  updateManyGuestsConnection: GuestConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one budget */
  upsertBudget?: Maybe<Budget>;
  /** Upsert one budgetItem */
  upsertBudgetItem?: Maybe<BudgetItem>;
  /** Upsert one guest */
  upsertGuest?: Maybe<Guest>;
  /** Upsert one guestList */
  upsertGuestList?: Maybe<GuestList>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBudgetArgs = {
  data: BudgetCreateInput;
};


export type MutationCreateBudgetItemArgs = {
  data: BudgetItemCreateInput;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateGuestListArgs = {
  data: GuestListCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBudgetArgs = {
  where: BudgetWhereUniqueInput;
};


export type MutationDeleteBudgetItemArgs = {
  where: BudgetItemWhereUniqueInput;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteGuestListArgs = {
  where: GuestListWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBudgetItemsArgs = {
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationDeleteManyBudgetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationDeleteManyBudgetsArgs = {
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationDeleteManyBudgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationDeleteManyGuestListsArgs = {
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationDeleteManyGuestListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationDeleteManyGuestsArgs = {
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationDeleteManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishBudgetArgs = {
  to?: Array<Stage>;
  where: BudgetWhereUniqueInput;
};


export type MutationPublishBudgetItemArgs = {
  to?: Array<Stage>;
  where: BudgetItemWhereUniqueInput;
};


export type MutationPublishGuestArgs = {
  to?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationPublishGuestListArgs = {
  to?: Array<Stage>;
  where: GuestListWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBudgetItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationPublishManyBudgetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationPublishManyBudgetsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationPublishManyBudgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationPublishManyGuestListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationPublishManyGuestListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationPublishManyGuestsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationPublishManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBudgetArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BudgetWhereUniqueInput;
};


export type MutationSchedulePublishBudgetItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BudgetItemWhereUniqueInput;
};


export type MutationSchedulePublishGuestArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationSchedulePublishGuestListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GuestListWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBudgetArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: BudgetWhereUniqueInput;
};


export type MutationScheduleUnpublishBudgetItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: BudgetItemWhereUniqueInput;
};


export type MutationScheduleUnpublishGuestArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GuestWhereUniqueInput;
};


export type MutationScheduleUnpublishGuestListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GuestListWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBudgetArgs = {
  from?: Array<Stage>;
  where: BudgetWhereUniqueInput;
};


export type MutationUnpublishBudgetItemArgs = {
  from?: Array<Stage>;
  where: BudgetItemWhereUniqueInput;
};


export type MutationUnpublishGuestArgs = {
  from?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationUnpublishGuestListArgs = {
  from?: Array<Stage>;
  where: GuestListWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBudgetItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationUnpublishManyBudgetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationUnpublishManyBudgetsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationUnpublishManyBudgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationUnpublishManyGuestListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationUnpublishManyGuestListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationUnpublishManyGuestsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUnpublishManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBudgetArgs = {
  data: BudgetUpdateInput;
  where: BudgetWhereUniqueInput;
};


export type MutationUpdateBudgetItemArgs = {
  data: BudgetItemUpdateInput;
  where: BudgetItemWhereUniqueInput;
};


export type MutationUpdateGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateGuestListArgs = {
  data: GuestListUpdateInput;
  where: GuestListWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBudgetItemsArgs = {
  data: BudgetItemUpdateManyInput;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationUpdateManyBudgetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BudgetItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BudgetItemManyWhereInput>;
};


export type MutationUpdateManyBudgetsArgs = {
  data: BudgetUpdateManyInput;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationUpdateManyBudgetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BudgetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BudgetManyWhereInput>;
};


export type MutationUpdateManyGuestListsArgs = {
  data: GuestListUpdateManyInput;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationUpdateManyGuestListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GuestListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestListManyWhereInput>;
};


export type MutationUpdateManyGuestsArgs = {
  data: GuestUpdateManyInput;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUpdateManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GuestUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBudgetArgs = {
  upsert: BudgetUpsertInput;
  where: BudgetWhereUniqueInput;
};


export type MutationUpsertBudgetItemArgs = {
  upsert: BudgetItemUpsertInput;
  where: BudgetItemWhereUniqueInput;
};


export type MutationUpsertGuestArgs = {
  upsert: GuestUpsertInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpsertGuestListArgs = {
  upsert: GuestListUpsertInput;
  where: GuestListWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single budget */
  budget?: Maybe<Budget>;
  /** Retrieve a single budgetItem */
  budgetItem?: Maybe<BudgetItem>;
  /** Retrieve document version */
  budgetItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple budgetItems */
  budgetItems: Array<BudgetItem>;
  /** Retrieve multiple budgetItems using the Relay connection interface */
  budgetItemsConnection: BudgetItemConnection;
  /** Retrieve document version */
  budgetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple budgets */
  budgets: Array<Budget>;
  /** Retrieve multiple budgets using the Relay connection interface */
  budgetsConnection: BudgetConnection;
  /** Retrieve a single guest */
  guest?: Maybe<Guest>;
  /** Retrieve a single guestList */
  guestList?: Maybe<GuestList>;
  /** Retrieve document version */
  guestListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple guestLists */
  guestLists: Array<GuestList>;
  /** Retrieve multiple guestLists using the Relay connection interface */
  guestListsConnection: GuestListConnection;
  /** Retrieve document version */
  guestVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple guests */
  guests: Array<Guest>;
  /** Retrieve multiple guests using the Relay connection interface */
  guestsConnection: GuestConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBudgetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BudgetWhereUniqueInput;
};


export type QueryBudgetItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BudgetItemWhereUniqueInput;
};


export type QueryBudgetItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBudgetItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BudgetItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BudgetItemWhereInput>;
};


export type QueryBudgetItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BudgetItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BudgetItemWhereInput>;
};


export type QueryBudgetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBudgetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BudgetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BudgetWhereInput>;
};


export type QueryBudgetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BudgetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BudgetWhereInput>;
};


export type QueryGuestArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GuestWhereUniqueInput;
};


export type QueryGuestListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GuestListWhereUniqueInput;
};


export type QueryGuestListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGuestListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestListWhereInput>;
};


export type QueryGuestListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestListWhereInput>;
};


export type QueryGuestVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGuestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Budget | BudgetItem | Guest | GuestList;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateBudgetItemMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  link?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  budgetType?: InputMaybe<BudgetType>;
  category?: InputMaybe<Category>;
  budgetId?: InputMaybe<Scalars['ID']>;
}>;


export type CreateBudgetItemMutation = { __typename?: 'Mutation', createBudgetItem?: { __typename?: 'BudgetItem', id: string } | null };

export type CreateBudgetMutationVariables = Exact<{
  imageURL?: InputMaybe<Scalars['String']>;
  name?: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateBudgetMutation = { __typename?: 'Mutation', createBudget?: { __typename?: 'Budget', id: string } | null };

export type CreateGuestMutationVariables = Exact<{
  listId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  confirmationCode?: InputMaybe<Scalars['String']>;
}>;


export type CreateGuestMutation = { __typename?: 'Mutation', createGuest?: { __typename?: 'Guest', id: string } | null };

export type CreateGuestsListMutationVariables = Exact<{
  data?: InputMaybe<GuestListCreateInput>;
}>;


export type CreateGuestsListMutation = { __typename?: 'Mutation', createGuestList?: { __typename?: 'GuestList', description?: string | null, id: string, imageUrl?: string | null, listName?: string | null } | null };

export type DeleteBudgetItemMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteBudgetItemMutationMutation = { __typename?: 'Mutation', deleteBudgetItem?: { __typename?: 'BudgetItem', id: string } | null, unpublishBudgetItem?: { __typename?: 'BudgetItem', id: string } | null };

export type DeleteBudgetMutationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteBudgetMutationMutation = { __typename?: 'Mutation', deleteBudget?: { __typename?: 'Budget', id: string } | null, unpublishBudget?: { __typename?: 'Budget', id: string } | null };

export type DeleteGuestListMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteGuestListMutation = { __typename?: 'Mutation', deleteGuestList?: { __typename?: 'GuestList', id: string } | null };

export type DeleteGuestMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteGuestMutation = { __typename?: 'Mutation', deleteGuest?: { __typename?: 'Guest', id: string } | null, unpublishGuest?: { __typename?: 'Guest', id: string } | null };

export type DeleteGuestsMutationVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
}>;


export type DeleteGuestsMutation = { __typename?: 'Mutation', deleteManyGuests: { __typename?: 'BatchPayload', count: any } };

export type PublishBudgetItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublishBudgetItemMutation = { __typename?: 'Mutation', publishBudgetItem?: { __typename?: 'BudgetItem', id: string } | null };

export type PublishBudgetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublishBudgetMutation = { __typename?: 'Mutation', publishBudget?: { __typename?: 'Budget', id: string } | null };

export type PublishGuestListMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublishGuestListMutation = { __typename?: 'Mutation', publishGuestList?: { __typename?: 'GuestList', id: string } | null };

export type PublishGuestMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PublishGuestMutation = { __typename?: 'Mutation', publishGuest?: { __typename?: 'Guest', id: string } | null };

export type UpdateBudgetItemMutationMutationVariables = Exact<{
  data?: InputMaybe<BudgetItemUpdateInput>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateBudgetItemMutationMutation = { __typename?: 'Mutation', updateBudgetItem?: { __typename?: 'BudgetItem', id: string } | null };

export type UpdateBudgetMutationMutationVariables = Exact<{
  data?: InputMaybe<BudgetUpdateInput>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateBudgetMutationMutation = { __typename?: 'Mutation', updateBudget?: { __typename?: 'Budget', id: string } | null };

export type UpdateConfirmationMutationVariables = Exact<{
  response?: InputMaybe<Scalars['Boolean']>;
  guestId?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateConfirmationMutation = { __typename?: 'Mutation', updateGuest?: { __typename?: 'Guest', id: string } | null, publishGuest?: { __typename?: 'Guest', id: string } | null };

export type UpdateGuestListMutationVariables = Exact<{
  id: Scalars['ID'];
  listName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
}>;


export type UpdateGuestListMutation = { __typename?: 'Mutation', updateGuestList?: { __typename?: 'GuestList', id: string } | null, publishGuestList?: { __typename?: 'GuestList', id: string } | null };

export type UpdateGuestMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  response?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateGuestMutation = { __typename?: 'Mutation', updateGuest?: { __typename?: 'Guest', id: string } | null, publishGuest?: { __typename?: 'Guest', id: string } | null };

export type FilterBudgetItemsQueryQueryVariables = Exact<{
  budgetID?: InputMaybe<Scalars['ID']>;
  name_contains?: InputMaybe<Scalars['String']>;
  budgetType?: InputMaybe<BudgetType>;
  category?: InputMaybe<Category>;
}>;


export type FilterBudgetItemsQueryQuery = { __typename?: 'Query', budgetItems: Array<{ __typename?: 'BudgetItem', id: string, name: string, price: number, imageURL?: string | null, budgetType?: BudgetType | null, category?: Category | null, link?: string | null }> };

export type GetAllGuestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGuestQuery = { __typename?: 'Query', guests: Array<{ __typename?: 'Guest', id: string, name?: string | null, list: Array<{ __typename?: 'GuestList', listName?: string | null, imageUrl?: string | null }> }> };

export type GetBudgetItemsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBudgetItemsQuery = { __typename?: 'Query', budgetItems: Array<{ __typename?: 'BudgetItem', budgetType?: BudgetType | null, category?: Category | null, createdAt: any, id: string, imageURL?: string | null, link?: string | null, name: string, price: number }> };

export type GetBudgetQueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetBudgetQueryQuery = { __typename?: 'Query', budget?: { __typename?: 'Budget', id: string, name: string, imageURL?: string | null, description?: string | null, items: Array<{ __typename?: 'BudgetItem', id: string, name: string, budgetType?: BudgetType | null, category?: Category | null, imageURL?: string | null, link?: string | null, price: number }> } | null };

export type GetBudgetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBudgetsQuery = { __typename?: 'Query', budgets: Array<{ __typename?: 'Budget', id: string, createdAt: any, imageURL?: string | null, name: string, description?: string | null }> };

export type GetGuestByConfirmationCodeQueryVariables = Exact<{
  confirmationCode?: InputMaybe<Scalars['String']>;
}>;


export type GetGuestByConfirmationCodeQuery = { __typename?: 'Query', guest?: { __typename?: 'Guest', id: string, name?: string | null } | null };

export type GetGuestByNameOrPhoneQueryVariables = Exact<{
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
}>;


export type GetGuestByNameOrPhoneQuery = { __typename?: 'Query', guests: Array<{ __typename?: 'Guest', id: string }> };

export type GetGuestsFromListQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetGuestsFromListQuery = { __typename?: 'Query', guestList?: { __typename?: 'GuestList', id: string, listName?: string | null, items: Array<{ __typename?: 'Guest', id: string, name?: string | null, confirmationCode: string, phone?: string | null, response?: boolean | null }> } | null };

export type GetGuestsListsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGuestsListsQuery = { __typename?: 'Query', guestLists: Array<{ __typename?: 'GuestList', id: string, listName?: string | null, imageUrl?: string | null }> };


export const CreateBudgetItemDocument = gql`
    mutation CreateBudgetItem($name: String = "", $price: Float = 1.5, $link: String = "", $imageURL: String = "", $budgetType: BudgetType = wishlist, $category: Category = Cama, $budgetId: ID = "") {
  createBudgetItem(
    data: {name: $name, price: $price, link: $link, imageURL: $imageURL, budgetType: $budgetType, category: $category, budget: {connect: {id: $budgetId}}}
  ) {
    id
  }
}
    `;
export type CreateBudgetItemMutationFn = Apollo.MutationFunction<CreateBudgetItemMutation, CreateBudgetItemMutationVariables>;

/**
 * __useCreateBudgetItemMutation__
 *
 * To run a mutation, you first call `useCreateBudgetItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBudgetItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBudgetItemMutation, { data, loading, error }] = useCreateBudgetItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      link: // value for 'link'
 *      imageURL: // value for 'imageURL'
 *      budgetType: // value for 'budgetType'
 *      category: // value for 'category'
 *      budgetId: // value for 'budgetId'
 *   },
 * });
 */
export function useCreateBudgetItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateBudgetItemMutation, CreateBudgetItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBudgetItemMutation, CreateBudgetItemMutationVariables>(CreateBudgetItemDocument, options);
      }
export type CreateBudgetItemMutationHookResult = ReturnType<typeof useCreateBudgetItemMutation>;
export type CreateBudgetItemMutationResult = Apollo.MutationResult<CreateBudgetItemMutation>;
export type CreateBudgetItemMutationOptions = Apollo.BaseMutationOptions<CreateBudgetItemMutation, CreateBudgetItemMutationVariables>;
export const CreateBudgetDocument = gql`
    mutation CreateBudget($imageURL: String = "", $name: String! = "", $description: String = "") {
  createBudget(
    data: {name: $name, imageURL: $imageURL, description: $description}
  ) {
    id
  }
}
    `;
export type CreateBudgetMutationFn = Apollo.MutationFunction<CreateBudgetMutation, CreateBudgetMutationVariables>;

/**
 * __useCreateBudgetMutation__
 *
 * To run a mutation, you first call `useCreateBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBudgetMutation, { data, loading, error }] = useCreateBudgetMutation({
 *   variables: {
 *      imageURL: // value for 'imageURL'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateBudgetMutation(baseOptions?: Apollo.MutationHookOptions<CreateBudgetMutation, CreateBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBudgetMutation, CreateBudgetMutationVariables>(CreateBudgetDocument, options);
      }
export type CreateBudgetMutationHookResult = ReturnType<typeof useCreateBudgetMutation>;
export type CreateBudgetMutationResult = Apollo.MutationResult<CreateBudgetMutation>;
export type CreateBudgetMutationOptions = Apollo.BaseMutationOptions<CreateBudgetMutation, CreateBudgetMutationVariables>;
export const CreateGuestDocument = gql`
    mutation CreateGuest($listId: ID = "", $name: String = "", $phone: String = "", $confirmationCode: String = "") {
  createGuest(
    data: {name: $name, phone: $phone, confirmationCode: $confirmationCode, list: {connect: {id: $listId}}}
  ) {
    id
  }
}
    `;
export type CreateGuestMutationFn = Apollo.MutationFunction<CreateGuestMutation, CreateGuestMutationVariables>;

/**
 * __useCreateGuestMutation__
 *
 * To run a mutation, you first call `useCreateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuestMutation, { data, loading, error }] = useCreateGuestMutation({
 *   variables: {
 *      listId: // value for 'listId'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      confirmationCode: // value for 'confirmationCode'
 *   },
 * });
 */
export function useCreateGuestMutation(baseOptions?: Apollo.MutationHookOptions<CreateGuestMutation, CreateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGuestMutation, CreateGuestMutationVariables>(CreateGuestDocument, options);
      }
export type CreateGuestMutationHookResult = ReturnType<typeof useCreateGuestMutation>;
export type CreateGuestMutationResult = Apollo.MutationResult<CreateGuestMutation>;
export type CreateGuestMutationOptions = Apollo.BaseMutationOptions<CreateGuestMutation, CreateGuestMutationVariables>;
export const CreateGuestsListDocument = gql`
    mutation CreateGuestsList($data: GuestListCreateInput = {}) {
  createGuestList(data: $data) {
    description
    id
    imageUrl
    listName
  }
}
    `;
export type CreateGuestsListMutationFn = Apollo.MutationFunction<CreateGuestsListMutation, CreateGuestsListMutationVariables>;

/**
 * __useCreateGuestsListMutation__
 *
 * To run a mutation, you first call `useCreateGuestsListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuestsListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuestsListMutation, { data, loading, error }] = useCreateGuestsListMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGuestsListMutation(baseOptions?: Apollo.MutationHookOptions<CreateGuestsListMutation, CreateGuestsListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGuestsListMutation, CreateGuestsListMutationVariables>(CreateGuestsListDocument, options);
      }
export type CreateGuestsListMutationHookResult = ReturnType<typeof useCreateGuestsListMutation>;
export type CreateGuestsListMutationResult = Apollo.MutationResult<CreateGuestsListMutation>;
export type CreateGuestsListMutationOptions = Apollo.BaseMutationOptions<CreateGuestsListMutation, CreateGuestsListMutationVariables>;
export const DeleteBudgetItemMutationDocument = gql`
    mutation DeleteBudgetItemMutation($id: ID = "") {
  deleteBudgetItem(where: {id: $id}) {
    id
  }
  unpublishBudgetItem(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteBudgetItemMutationMutationFn = Apollo.MutationFunction<DeleteBudgetItemMutationMutation, DeleteBudgetItemMutationMutationVariables>;

/**
 * __useDeleteBudgetItemMutationMutation__
 *
 * To run a mutation, you first call `useDeleteBudgetItemMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBudgetItemMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBudgetItemMutationMutation, { data, loading, error }] = useDeleteBudgetItemMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBudgetItemMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBudgetItemMutationMutation, DeleteBudgetItemMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBudgetItemMutationMutation, DeleteBudgetItemMutationMutationVariables>(DeleteBudgetItemMutationDocument, options);
      }
export type DeleteBudgetItemMutationMutationHookResult = ReturnType<typeof useDeleteBudgetItemMutationMutation>;
export type DeleteBudgetItemMutationMutationResult = Apollo.MutationResult<DeleteBudgetItemMutationMutation>;
export type DeleteBudgetItemMutationMutationOptions = Apollo.BaseMutationOptions<DeleteBudgetItemMutationMutation, DeleteBudgetItemMutationMutationVariables>;
export const DeleteBudgetMutationDocument = gql`
    mutation DeleteBudgetMutation($id: ID = "") {
  deleteBudget(where: {id: $id}) {
    id
  }
  unpublishBudget(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteBudgetMutationMutationFn = Apollo.MutationFunction<DeleteBudgetMutationMutation, DeleteBudgetMutationMutationVariables>;

/**
 * __useDeleteBudgetMutationMutation__
 *
 * To run a mutation, you first call `useDeleteBudgetMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBudgetMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBudgetMutationMutation, { data, loading, error }] = useDeleteBudgetMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBudgetMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBudgetMutationMutation, DeleteBudgetMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBudgetMutationMutation, DeleteBudgetMutationMutationVariables>(DeleteBudgetMutationDocument, options);
      }
export type DeleteBudgetMutationMutationHookResult = ReturnType<typeof useDeleteBudgetMutationMutation>;
export type DeleteBudgetMutationMutationResult = Apollo.MutationResult<DeleteBudgetMutationMutation>;
export type DeleteBudgetMutationMutationOptions = Apollo.BaseMutationOptions<DeleteBudgetMutationMutation, DeleteBudgetMutationMutationVariables>;
export const DeleteGuestListDocument = gql`
    mutation DeleteGuestList($id: ID!) {
  deleteGuestList(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteGuestListMutationFn = Apollo.MutationFunction<DeleteGuestListMutation, DeleteGuestListMutationVariables>;

/**
 * __useDeleteGuestListMutation__
 *
 * To run a mutation, you first call `useDeleteGuestListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuestListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuestListMutation, { data, loading, error }] = useDeleteGuestListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGuestListMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGuestListMutation, DeleteGuestListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGuestListMutation, DeleteGuestListMutationVariables>(DeleteGuestListDocument, options);
      }
export type DeleteGuestListMutationHookResult = ReturnType<typeof useDeleteGuestListMutation>;
export type DeleteGuestListMutationResult = Apollo.MutationResult<DeleteGuestListMutation>;
export type DeleteGuestListMutationOptions = Apollo.BaseMutationOptions<DeleteGuestListMutation, DeleteGuestListMutationVariables>;
export const DeleteGuestDocument = gql`
    mutation DeleteGuest($id: ID = "") {
  deleteGuest(where: {id: $id}) {
    id
  }
  unpublishGuest(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteGuestMutationFn = Apollo.MutationFunction<DeleteGuestMutation, DeleteGuestMutationVariables>;

/**
 * __useDeleteGuestMutation__
 *
 * To run a mutation, you first call `useDeleteGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuestMutation, { data, loading, error }] = useDeleteGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGuestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGuestMutation, DeleteGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGuestMutation, DeleteGuestMutationVariables>(DeleteGuestDocument, options);
      }
export type DeleteGuestMutationHookResult = ReturnType<typeof useDeleteGuestMutation>;
export type DeleteGuestMutationResult = Apollo.MutationResult<DeleteGuestMutation>;
export type DeleteGuestMutationOptions = Apollo.BaseMutationOptions<DeleteGuestMutation, DeleteGuestMutationVariables>;
export const DeleteGuestsDocument = gql`
    mutation DeleteGuests($ids: [ID] = "") {
  deleteManyGuests(where: {id_in: $ids}) {
    count
  }
}
    `;
export type DeleteGuestsMutationFn = Apollo.MutationFunction<DeleteGuestsMutation, DeleteGuestsMutationVariables>;

/**
 * __useDeleteGuestsMutation__
 *
 * To run a mutation, you first call `useDeleteGuestsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuestsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuestsMutation, { data, loading, error }] = useDeleteGuestsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteGuestsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGuestsMutation, DeleteGuestsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGuestsMutation, DeleteGuestsMutationVariables>(DeleteGuestsDocument, options);
      }
export type DeleteGuestsMutationHookResult = ReturnType<typeof useDeleteGuestsMutation>;
export type DeleteGuestsMutationResult = Apollo.MutationResult<DeleteGuestsMutation>;
export type DeleteGuestsMutationOptions = Apollo.BaseMutationOptions<DeleteGuestsMutation, DeleteGuestsMutationVariables>;
export const PublishBudgetItemDocument = gql`
    mutation PublishBudgetItem($id: ID!) {
  publishBudgetItem(to: PUBLISHED, where: {id: $id}) {
    id
  }
}
    `;
export type PublishBudgetItemMutationFn = Apollo.MutationFunction<PublishBudgetItemMutation, PublishBudgetItemMutationVariables>;

/**
 * __usePublishBudgetItemMutation__
 *
 * To run a mutation, you first call `usePublishBudgetItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishBudgetItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishBudgetItemMutation, { data, loading, error }] = usePublishBudgetItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishBudgetItemMutation(baseOptions?: Apollo.MutationHookOptions<PublishBudgetItemMutation, PublishBudgetItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishBudgetItemMutation, PublishBudgetItemMutationVariables>(PublishBudgetItemDocument, options);
      }
export type PublishBudgetItemMutationHookResult = ReturnType<typeof usePublishBudgetItemMutation>;
export type PublishBudgetItemMutationResult = Apollo.MutationResult<PublishBudgetItemMutation>;
export type PublishBudgetItemMutationOptions = Apollo.BaseMutationOptions<PublishBudgetItemMutation, PublishBudgetItemMutationVariables>;
export const PublishBudgetDocument = gql`
    mutation PublishBudget($id: ID!) {
  publishBudget(to: PUBLISHED, where: {id: $id}) {
    id
  }
}
    `;
export type PublishBudgetMutationFn = Apollo.MutationFunction<PublishBudgetMutation, PublishBudgetMutationVariables>;

/**
 * __usePublishBudgetMutation__
 *
 * To run a mutation, you first call `usePublishBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishBudgetMutation, { data, loading, error }] = usePublishBudgetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishBudgetMutation(baseOptions?: Apollo.MutationHookOptions<PublishBudgetMutation, PublishBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishBudgetMutation, PublishBudgetMutationVariables>(PublishBudgetDocument, options);
      }
export type PublishBudgetMutationHookResult = ReturnType<typeof usePublishBudgetMutation>;
export type PublishBudgetMutationResult = Apollo.MutationResult<PublishBudgetMutation>;
export type PublishBudgetMutationOptions = Apollo.BaseMutationOptions<PublishBudgetMutation, PublishBudgetMutationVariables>;
export const PublishGuestListDocument = gql`
    mutation PublishGuestList($id: ID!) {
  publishGuestList(where: {id: $id}) {
    id
  }
}
    `;
export type PublishGuestListMutationFn = Apollo.MutationFunction<PublishGuestListMutation, PublishGuestListMutationVariables>;

/**
 * __usePublishGuestListMutation__
 *
 * To run a mutation, you first call `usePublishGuestListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishGuestListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishGuestListMutation, { data, loading, error }] = usePublishGuestListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishGuestListMutation(baseOptions?: Apollo.MutationHookOptions<PublishGuestListMutation, PublishGuestListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishGuestListMutation, PublishGuestListMutationVariables>(PublishGuestListDocument, options);
      }
export type PublishGuestListMutationHookResult = ReturnType<typeof usePublishGuestListMutation>;
export type PublishGuestListMutationResult = Apollo.MutationResult<PublishGuestListMutation>;
export type PublishGuestListMutationOptions = Apollo.BaseMutationOptions<PublishGuestListMutation, PublishGuestListMutationVariables>;
export const PublishGuestDocument = gql`
    mutation PublishGuest($id: ID = "") {
  publishGuest(to: PUBLISHED, where: {id: $id}) {
    id
  }
}
    `;
export type PublishGuestMutationFn = Apollo.MutationFunction<PublishGuestMutation, PublishGuestMutationVariables>;

/**
 * __usePublishGuestMutation__
 *
 * To run a mutation, you first call `usePublishGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishGuestMutation, { data, loading, error }] = usePublishGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishGuestMutation(baseOptions?: Apollo.MutationHookOptions<PublishGuestMutation, PublishGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishGuestMutation, PublishGuestMutationVariables>(PublishGuestDocument, options);
      }
export type PublishGuestMutationHookResult = ReturnType<typeof usePublishGuestMutation>;
export type PublishGuestMutationResult = Apollo.MutationResult<PublishGuestMutation>;
export type PublishGuestMutationOptions = Apollo.BaseMutationOptions<PublishGuestMutation, PublishGuestMutationVariables>;
export const UpdateBudgetItemMutationDocument = gql`
    mutation UpdateBudgetItemMutation($data: BudgetItemUpdateInput = {}, $id: ID = "") {
  updateBudgetItem(data: $data, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateBudgetItemMutationMutationFn = Apollo.MutationFunction<UpdateBudgetItemMutationMutation, UpdateBudgetItemMutationMutationVariables>;

/**
 * __useUpdateBudgetItemMutationMutation__
 *
 * To run a mutation, you first call `useUpdateBudgetItemMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBudgetItemMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBudgetItemMutationMutation, { data, loading, error }] = useUpdateBudgetItemMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateBudgetItemMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBudgetItemMutationMutation, UpdateBudgetItemMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBudgetItemMutationMutation, UpdateBudgetItemMutationMutationVariables>(UpdateBudgetItemMutationDocument, options);
      }
export type UpdateBudgetItemMutationMutationHookResult = ReturnType<typeof useUpdateBudgetItemMutationMutation>;
export type UpdateBudgetItemMutationMutationResult = Apollo.MutationResult<UpdateBudgetItemMutationMutation>;
export type UpdateBudgetItemMutationMutationOptions = Apollo.BaseMutationOptions<UpdateBudgetItemMutationMutation, UpdateBudgetItemMutationMutationVariables>;
export const UpdateBudgetMutationDocument = gql`
    mutation UpdateBudgetMutation($data: BudgetUpdateInput = {imageURL: "", name: ""}, $id: ID = "") {
  updateBudget(data: $data, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateBudgetMutationMutationFn = Apollo.MutationFunction<UpdateBudgetMutationMutation, UpdateBudgetMutationMutationVariables>;

/**
 * __useUpdateBudgetMutationMutation__
 *
 * To run a mutation, you first call `useUpdateBudgetMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBudgetMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBudgetMutationMutation, { data, loading, error }] = useUpdateBudgetMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateBudgetMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBudgetMutationMutation, UpdateBudgetMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBudgetMutationMutation, UpdateBudgetMutationMutationVariables>(UpdateBudgetMutationDocument, options);
      }
export type UpdateBudgetMutationMutationHookResult = ReturnType<typeof useUpdateBudgetMutationMutation>;
export type UpdateBudgetMutationMutationResult = Apollo.MutationResult<UpdateBudgetMutationMutation>;
export type UpdateBudgetMutationMutationOptions = Apollo.BaseMutationOptions<UpdateBudgetMutationMutation, UpdateBudgetMutationMutationVariables>;
export const UpdateConfirmationDocument = gql`
    mutation UpdateConfirmation($response: Boolean = false, $guestId: ID = "") {
  updateGuest(data: {response: $response}, where: {id: $guestId}) {
    id
  }
  publishGuest(where: {id: $guestId}) {
    id
  }
}
    `;
export type UpdateConfirmationMutationFn = Apollo.MutationFunction<UpdateConfirmationMutation, UpdateConfirmationMutationVariables>;

/**
 * __useUpdateConfirmationMutation__
 *
 * To run a mutation, you first call `useUpdateConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConfirmationMutation, { data, loading, error }] = useUpdateConfirmationMutation({
 *   variables: {
 *      response: // value for 'response'
 *      guestId: // value for 'guestId'
 *   },
 * });
 */
export function useUpdateConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConfirmationMutation, UpdateConfirmationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConfirmationMutation, UpdateConfirmationMutationVariables>(UpdateConfirmationDocument, options);
      }
export type UpdateConfirmationMutationHookResult = ReturnType<typeof useUpdateConfirmationMutation>;
export type UpdateConfirmationMutationResult = Apollo.MutationResult<UpdateConfirmationMutation>;
export type UpdateConfirmationMutationOptions = Apollo.BaseMutationOptions<UpdateConfirmationMutation, UpdateConfirmationMutationVariables>;
export const UpdateGuestListDocument = gql`
    mutation UpdateGuestList($id: ID!, $listName: String = "", $imageUrl: String = "") {
  updateGuestList(
    data: {imageUrl: $imageUrl, listName: $listName}
    where: {id: $id}
  ) {
    id
  }
  publishGuestList(where: {id: $id}) {
    id
  }
}
    `;
export type UpdateGuestListMutationFn = Apollo.MutationFunction<UpdateGuestListMutation, UpdateGuestListMutationVariables>;

/**
 * __useUpdateGuestListMutation__
 *
 * To run a mutation, you first call `useUpdateGuestListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuestListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuestListMutation, { data, loading, error }] = useUpdateGuestListMutation({
 *   variables: {
 *      id: // value for 'id'
 *      listName: // value for 'listName'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useUpdateGuestListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGuestListMutation, UpdateGuestListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGuestListMutation, UpdateGuestListMutationVariables>(UpdateGuestListDocument, options);
      }
export type UpdateGuestListMutationHookResult = ReturnType<typeof useUpdateGuestListMutation>;
export type UpdateGuestListMutationResult = Apollo.MutationResult<UpdateGuestListMutation>;
export type UpdateGuestListMutationOptions = Apollo.BaseMutationOptions<UpdateGuestListMutation, UpdateGuestListMutationVariables>;
export const UpdateGuestDocument = gql`
    mutation UpdateGuest($id: ID = "", $name: String = "", $phone: String = "", $response: Boolean = false) {
  updateGuest(
    where: {id: $id}
    data: {response: $response, name: $name, phone: $phone}
  ) {
    id
  }
  publishGuest(to: PUBLISHED, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateGuestMutationFn = Apollo.MutationFunction<UpdateGuestMutation, UpdateGuestMutationVariables>;

/**
 * __useUpdateGuestMutation__
 *
 * To run a mutation, you first call `useUpdateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuestMutation, { data, loading, error }] = useUpdateGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      response: // value for 'response'
 *   },
 * });
 */
export function useUpdateGuestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGuestMutation, UpdateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGuestMutation, UpdateGuestMutationVariables>(UpdateGuestDocument, options);
      }
export type UpdateGuestMutationHookResult = ReturnType<typeof useUpdateGuestMutation>;
export type UpdateGuestMutationResult = Apollo.MutationResult<UpdateGuestMutation>;
export type UpdateGuestMutationOptions = Apollo.BaseMutationOptions<UpdateGuestMutation, UpdateGuestMutationVariables>;
export const FilterBudgetItemsQueryDocument = gql`
    query FilterBudgetItemsQuery($budgetID: ID = "", $name_contains: String = "", $budgetType: BudgetType = purchased, $category: Category = Cama) {
  budgetItems(
    where: {budget: {id: $budgetID}, name_contains: $name_contains, budgetType: $budgetType, category: $category}
  ) {
    id
    name
    price
    imageURL
    budgetType
    category
    link
  }
}
    `;

/**
 * __useFilterBudgetItemsQueryQuery__
 *
 * To run a query within a React component, call `useFilterBudgetItemsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterBudgetItemsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterBudgetItemsQueryQuery({
 *   variables: {
 *      budgetID: // value for 'budgetID'
 *      name_contains: // value for 'name_contains'
 *      budgetType: // value for 'budgetType'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useFilterBudgetItemsQueryQuery(baseOptions?: Apollo.QueryHookOptions<FilterBudgetItemsQueryQuery, FilterBudgetItemsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterBudgetItemsQueryQuery, FilterBudgetItemsQueryQueryVariables>(FilterBudgetItemsQueryDocument, options);
      }
export function useFilterBudgetItemsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterBudgetItemsQueryQuery, FilterBudgetItemsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterBudgetItemsQueryQuery, FilterBudgetItemsQueryQueryVariables>(FilterBudgetItemsQueryDocument, options);
        }
export type FilterBudgetItemsQueryQueryHookResult = ReturnType<typeof useFilterBudgetItemsQueryQuery>;
export type FilterBudgetItemsQueryLazyQueryHookResult = ReturnType<typeof useFilterBudgetItemsQueryLazyQuery>;
export type FilterBudgetItemsQueryQueryResult = Apollo.QueryResult<FilterBudgetItemsQueryQuery, FilterBudgetItemsQueryQueryVariables>;
export const GetAllGuestDocument = gql`
    query GetAllGuest {
  guests(last: 10000000) {
    id
    name
    list {
      listName
      imageUrl
    }
  }
}
    `;

/**
 * __useGetAllGuestQuery__
 *
 * To run a query within a React component, call `useGetAllGuestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGuestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGuestQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGuestQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGuestQuery, GetAllGuestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGuestQuery, GetAllGuestQueryVariables>(GetAllGuestDocument, options);
      }
export function useGetAllGuestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGuestQuery, GetAllGuestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGuestQuery, GetAllGuestQueryVariables>(GetAllGuestDocument, options);
        }
export type GetAllGuestQueryHookResult = ReturnType<typeof useGetAllGuestQuery>;
export type GetAllGuestLazyQueryHookResult = ReturnType<typeof useGetAllGuestLazyQuery>;
export type GetAllGuestQueryResult = Apollo.QueryResult<GetAllGuestQuery, GetAllGuestQueryVariables>;
export const GetBudgetItemsDocument = gql`
    query GetBudgetItems($id: ID!) {
  budgetItems(where: {budget: {id: $id}}) {
    budgetType
    category
    createdAt
    id
    imageURL
    link
    name
    price
  }
}
    `;

/**
 * __useGetBudgetItemsQuery__
 *
 * To run a query within a React component, call `useGetBudgetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBudgetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBudgetItemsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBudgetItemsQuery(baseOptions: Apollo.QueryHookOptions<GetBudgetItemsQuery, GetBudgetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBudgetItemsQuery, GetBudgetItemsQueryVariables>(GetBudgetItemsDocument, options);
      }
export function useGetBudgetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBudgetItemsQuery, GetBudgetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBudgetItemsQuery, GetBudgetItemsQueryVariables>(GetBudgetItemsDocument, options);
        }
export type GetBudgetItemsQueryHookResult = ReturnType<typeof useGetBudgetItemsQuery>;
export type GetBudgetItemsLazyQueryHookResult = ReturnType<typeof useGetBudgetItemsLazyQuery>;
export type GetBudgetItemsQueryResult = Apollo.QueryResult<GetBudgetItemsQuery, GetBudgetItemsQueryVariables>;
export const GetBudgetQueryDocument = gql`
    query GetBudgetQuery($id: ID = "") {
  budget(where: {id: $id}) {
    id
    name
    imageURL
    description
    items {
      ... on BudgetItem {
        id
        name
        budgetType
        category
        imageURL
        link
        price
      }
    }
  }
}
    `;

/**
 * __useGetBudgetQueryQuery__
 *
 * To run a query within a React component, call `useGetBudgetQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBudgetQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBudgetQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBudgetQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetBudgetQueryQuery, GetBudgetQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBudgetQueryQuery, GetBudgetQueryQueryVariables>(GetBudgetQueryDocument, options);
      }
export function useGetBudgetQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBudgetQueryQuery, GetBudgetQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBudgetQueryQuery, GetBudgetQueryQueryVariables>(GetBudgetQueryDocument, options);
        }
export type GetBudgetQueryQueryHookResult = ReturnType<typeof useGetBudgetQueryQuery>;
export type GetBudgetQueryLazyQueryHookResult = ReturnType<typeof useGetBudgetQueryLazyQuery>;
export type GetBudgetQueryQueryResult = Apollo.QueryResult<GetBudgetQueryQuery, GetBudgetQueryQueryVariables>;
export const GetBudgetsDocument = gql`
    query GetBudgets {
  budgets {
    id
    createdAt
    imageURL
    name
    description
  }
}
    `;

/**
 * __useGetBudgetsQuery__
 *
 * To run a query within a React component, call `useGetBudgetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBudgetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBudgetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBudgetsQuery(baseOptions?: Apollo.QueryHookOptions<GetBudgetsQuery, GetBudgetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBudgetsQuery, GetBudgetsQueryVariables>(GetBudgetsDocument, options);
      }
export function useGetBudgetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBudgetsQuery, GetBudgetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBudgetsQuery, GetBudgetsQueryVariables>(GetBudgetsDocument, options);
        }
export type GetBudgetsQueryHookResult = ReturnType<typeof useGetBudgetsQuery>;
export type GetBudgetsLazyQueryHookResult = ReturnType<typeof useGetBudgetsLazyQuery>;
export type GetBudgetsQueryResult = Apollo.QueryResult<GetBudgetsQuery, GetBudgetsQueryVariables>;
export const GetGuestByConfirmationCodeDocument = gql`
    query GetGuestByConfirmationCode($confirmationCode: String = "") {
  guest(where: {confirmationCode: $confirmationCode}) {
    id
    name
  }
}
    `;

/**
 * __useGetGuestByConfirmationCodeQuery__
 *
 * To run a query within a React component, call `useGetGuestByConfirmationCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuestByConfirmationCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuestByConfirmationCodeQuery({
 *   variables: {
 *      confirmationCode: // value for 'confirmationCode'
 *   },
 * });
 */
export function useGetGuestByConfirmationCodeQuery(baseOptions?: Apollo.QueryHookOptions<GetGuestByConfirmationCodeQuery, GetGuestByConfirmationCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGuestByConfirmationCodeQuery, GetGuestByConfirmationCodeQueryVariables>(GetGuestByConfirmationCodeDocument, options);
      }
export function useGetGuestByConfirmationCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGuestByConfirmationCodeQuery, GetGuestByConfirmationCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGuestByConfirmationCodeQuery, GetGuestByConfirmationCodeQueryVariables>(GetGuestByConfirmationCodeDocument, options);
        }
export type GetGuestByConfirmationCodeQueryHookResult = ReturnType<typeof useGetGuestByConfirmationCodeQuery>;
export type GetGuestByConfirmationCodeLazyQueryHookResult = ReturnType<typeof useGetGuestByConfirmationCodeLazyQuery>;
export type GetGuestByConfirmationCodeQueryResult = Apollo.QueryResult<GetGuestByConfirmationCodeQuery, GetGuestByConfirmationCodeQueryVariables>;
export const GetGuestByNameOrPhoneDocument = gql`
    query GetGuestByNameOrPhone($name: String!, $phone: String = "") {
  guests(where: {name: $name, OR: {phone: $phone}}) {
    id
  }
}
    `;

/**
 * __useGetGuestByNameOrPhoneQuery__
 *
 * To run a query within a React component, call `useGetGuestByNameOrPhoneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuestByNameOrPhoneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuestByNameOrPhoneQuery({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useGetGuestByNameOrPhoneQuery(baseOptions: Apollo.QueryHookOptions<GetGuestByNameOrPhoneQuery, GetGuestByNameOrPhoneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGuestByNameOrPhoneQuery, GetGuestByNameOrPhoneQueryVariables>(GetGuestByNameOrPhoneDocument, options);
      }
export function useGetGuestByNameOrPhoneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGuestByNameOrPhoneQuery, GetGuestByNameOrPhoneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGuestByNameOrPhoneQuery, GetGuestByNameOrPhoneQueryVariables>(GetGuestByNameOrPhoneDocument, options);
        }
export type GetGuestByNameOrPhoneQueryHookResult = ReturnType<typeof useGetGuestByNameOrPhoneQuery>;
export type GetGuestByNameOrPhoneLazyQueryHookResult = ReturnType<typeof useGetGuestByNameOrPhoneLazyQuery>;
export type GetGuestByNameOrPhoneQueryResult = Apollo.QueryResult<GetGuestByNameOrPhoneQuery, GetGuestByNameOrPhoneQueryVariables>;
export const GetGuestsFromListDocument = gql`
    query GetGuestsFromList($id: ID = "") {
  guestList(where: {id: $id}) {
    id
    listName
    items(last: 10000000) {
      ... on Guest {
        id
        name
        confirmationCode
        phone
        response
      }
    }
  }
}
    `;

/**
 * __useGetGuestsFromListQuery__
 *
 * To run a query within a React component, call `useGetGuestsFromListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuestsFromListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuestsFromListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGuestsFromListQuery(baseOptions?: Apollo.QueryHookOptions<GetGuestsFromListQuery, GetGuestsFromListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGuestsFromListQuery, GetGuestsFromListQueryVariables>(GetGuestsFromListDocument, options);
      }
export function useGetGuestsFromListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGuestsFromListQuery, GetGuestsFromListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGuestsFromListQuery, GetGuestsFromListQueryVariables>(GetGuestsFromListDocument, options);
        }
export type GetGuestsFromListQueryHookResult = ReturnType<typeof useGetGuestsFromListQuery>;
export type GetGuestsFromListLazyQueryHookResult = ReturnType<typeof useGetGuestsFromListLazyQuery>;
export type GetGuestsFromListQueryResult = Apollo.QueryResult<GetGuestsFromListQuery, GetGuestsFromListQueryVariables>;
export const GetGuestsListsDocument = gql`
    query getGuestsLists {
  guestLists {
    id
    listName
    imageUrl
  }
}
    `;

/**
 * __useGetGuestsListsQuery__
 *
 * To run a query within a React component, call `useGetGuestsListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuestsListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuestsListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGuestsListsQuery(baseOptions?: Apollo.QueryHookOptions<GetGuestsListsQuery, GetGuestsListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGuestsListsQuery, GetGuestsListsQueryVariables>(GetGuestsListsDocument, options);
      }
export function useGetGuestsListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGuestsListsQuery, GetGuestsListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGuestsListsQuery, GetGuestsListsQueryVariables>(GetGuestsListsDocument, options);
        }
export type GetGuestsListsQueryHookResult = ReturnType<typeof useGetGuestsListsQuery>;
export type GetGuestsListsLazyQueryHookResult = ReturnType<typeof useGetGuestsListsLazyQuery>;
export type GetGuestsListsQueryResult = Apollo.QueryResult<GetGuestsListsQuery, GetGuestsListsQueryVariables>;
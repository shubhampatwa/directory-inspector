/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GQL_Files = {
  __typename?: 'Files';
  fileName: Scalars['String'];
  id: Scalars['String'];
  isDirectory: Scalars['Boolean'];
  parsedPath: Array<Maybe<Scalars['String']>>;
  path: Scalars['String'];
  size: Scalars['Int'];
};

export type GQL_FilesPaginated = {
  __typename?: 'FilesPaginated';
  entries: Array<Maybe<GQL_Files>>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type GQL_Query = {
  __typename?: 'Query';
  files?: Maybe<GQL_FilesPaginated>;
};


export type GQL_QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  path: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GQL_ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Files: ResolverTypeWrapper<GQL_Files>;
  FilesPaginated: ResolverTypeWrapper<GQL_FilesPaginated>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GQL_ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Files: GQL_Files;
  FilesPaginated: GQL_FilesPaginated;
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type GQL_FilesResolvers<ContextType = any, ParentType extends GQL_ResolversParentTypes['Files'] = GQL_ResolversParentTypes['Files']> = {
  fileName?: Resolver<GQL_ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GQL_ResolversTypes['String'], ParentType, ContextType>;
  isDirectory?: Resolver<GQL_ResolversTypes['Boolean'], ParentType, ContextType>;
  parsedPath?: Resolver<Array<Maybe<GQL_ResolversTypes['String']>>, ParentType, ContextType>;
  path?: Resolver<GQL_ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<GQL_ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQL_FilesPaginatedResolvers<ContextType = any, ParentType extends GQL_ResolversParentTypes['FilesPaginated'] = GQL_ResolversParentTypes['FilesPaginated']> = {
  entries?: Resolver<Array<Maybe<GQL_ResolversTypes['Files']>>, ParentType, ContextType>;
  limit?: Resolver<GQL_ResolversTypes['Int'], ParentType, ContextType>;
  offset?: Resolver<GQL_ResolversTypes['Int'], ParentType, ContextType>;
  totalCount?: Resolver<GQL_ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQL_QueryResolvers<ContextType = any, ParentType extends GQL_ResolversParentTypes['Query'] = GQL_ResolversParentTypes['Query']> = {
  files?: Resolver<Maybe<GQL_ResolversTypes['FilesPaginated']>, ParentType, ContextType, RequireFields<GQL_QueryFilesArgs, 'limit' | 'offset' | 'path'>>;
};

export type GQL_Resolvers<ContextType = any> = {
  Files?: GQL_FilesResolvers<ContextType>;
  FilesPaginated?: GQL_FilesPaginatedResolvers<ContextType>;
  Query?: GQL_QueryResolvers<ContextType>;
};


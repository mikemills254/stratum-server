
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Workbook
 * 
 */
export type Workbook = $Result.DefaultSelection<Prisma.$WorkbookPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model Worksheet
 * 
 */
export type Worksheet = $Result.DefaultSelection<Prisma.$WorksheetPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Annotation
 * 
 */
export type Annotation = $Result.DefaultSelection<Prisma.$AnnotationPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  DIRECTOR: 'DIRECTOR',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const GradeStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type GradeStatus = (typeof GradeStatus)[keyof typeof GradeStatus]


export const AnswerStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  GRADED: 'GRADED'
};

export type AnswerStatus = (typeof AnswerStatus)[keyof typeof AnswerStatus]


export const AuditLogType: {
  SUBMISSION: 'SUBMISSION',
  GRADING: 'GRADING',
  ANNOTATION: 'ANNOTATION',
  STREAK: 'STREAK',
  WORKBOOK_UPDATE: 'WORKBOOK_UPDATE',
  ENROLLMENT: 'ENROLLMENT'
};

export type AuditLogType = (typeof AuditLogType)[keyof typeof AuditLogType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type GradeStatus = $Enums.GradeStatus

export const GradeStatus: typeof $Enums.GradeStatus

export type AnswerStatus = $Enums.AnswerStatus

export const AnswerStatus: typeof $Enums.AnswerStatus

export type AuditLogType = $Enums.AuditLogType

export const AuditLogType: typeof $Enums.AuditLogType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workbook`: Exposes CRUD operations for the **Workbook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workbooks
    * const workbooks = await prisma.workbook.findMany()
    * ```
    */
  get workbook(): Prisma.WorkbookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worksheet`: Exposes CRUD operations for the **Worksheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worksheets
    * const worksheets = await prisma.worksheet.findMany()
    * ```
    */
  get worksheet(): Prisma.WorksheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annotation`: Exposes CRUD operations for the **Annotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annotations
    * const annotations = await prisma.annotation.findMany()
    * ```
    */
  get annotation(): Prisma.AnnotationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AuditLog: 'AuditLog',
    Workbook: 'Workbook',
    Membership: 'Membership',
    Worksheet: 'Worksheet',
    Question: 'Question',
    Answer: 'Answer',
    Annotation: 'Annotation',
    Grade: 'Grade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "auditLog" | "workbook" | "membership" | "worksheet" | "question" | "answer" | "annotation" | "grade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Workbook: {
        payload: Prisma.$WorkbookPayload<ExtArgs>
        fields: Prisma.WorkbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkbookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkbookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          findFirst: {
            args: Prisma.WorkbookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkbookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          findMany: {
            args: Prisma.WorkbookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>[]
          }
          create: {
            args: Prisma.WorkbookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          createMany: {
            args: Prisma.WorkbookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkbookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>[]
          }
          delete: {
            args: Prisma.WorkbookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          update: {
            args: Prisma.WorkbookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          deleteMany: {
            args: Prisma.WorkbookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkbookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkbookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>[]
          }
          upsert: {
            args: Prisma.WorkbookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkbookPayload>
          }
          aggregate: {
            args: Prisma.WorkbookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkbook>
          }
          groupBy: {
            args: Prisma.WorkbookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkbookCountArgs<ExtArgs>
            result: $Utils.Optional<WorkbookCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      Worksheet: {
        payload: Prisma.$WorksheetPayload<ExtArgs>
        fields: Prisma.WorksheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          findFirst: {
            args: Prisma.WorksheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          findMany: {
            args: Prisma.WorksheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>[]
          }
          create: {
            args: Prisma.WorksheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          createMany: {
            args: Prisma.WorksheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>[]
          }
          delete: {
            args: Prisma.WorksheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          update: {
            args: Prisma.WorksheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          deleteMany: {
            args: Prisma.WorksheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>[]
          }
          upsert: {
            args: Prisma.WorksheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksheetPayload>
          }
          aggregate: {
            args: Prisma.WorksheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorksheet>
          }
          groupBy: {
            args: Prisma.WorksheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksheetCountArgs<ExtArgs>
            result: $Utils.Optional<WorksheetCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Annotation: {
        payload: Prisma.$AnnotationPayload<ExtArgs>
        fields: Prisma.AnnotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          findFirst: {
            args: Prisma.AnnotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          findMany: {
            args: Prisma.AnnotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          create: {
            args: Prisma.AnnotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          createMany: {
            args: Prisma.AnnotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          delete: {
            args: Prisma.AnnotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          update: {
            args: Prisma.AnnotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          deleteMany: {
            args: Prisma.AnnotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnotationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>[]
          }
          upsert: {
            args: Prisma.AnnotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationPayload>
          }
          aggregate: {
            args: Prisma.AnnotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnotation>
          }
          groupBy: {
            args: Prisma.AnnotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnotationCountArgs<ExtArgs>
            result: $Utils.Optional<AnnotationCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    auditLog?: AuditLogOmit
    workbook?: WorkbookOmit
    membership?: MembershipOmit
    worksheet?: WorksheetOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    annotation?: AnnotationOmit
    grade?: GradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workbooks: number
    memberships: number
    questions: number
    answers: number
    annotations: number
    grades: number
    approvals: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workbooks?: boolean | UserCountOutputTypeCountWorkbooksArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    annotations?: boolean | UserCountOutputTypeCountAnnotationsArgs
    grades?: boolean | UserCountOutputTypeCountGradesArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkbooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkbookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type WorkbookCountOutputType
   */

  export type WorkbookCountOutputType = {
    worksheets: number
    memberships: number
    auditLogs: number
  }

  export type WorkbookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksheets?: boolean | WorkbookCountOutputTypeCountWorksheetsArgs
    memberships?: boolean | WorkbookCountOutputTypeCountMembershipsArgs
    auditLogs?: boolean | WorkbookCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkbookCountOutputType without action
   */
  export type WorkbookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkbookCountOutputType
     */
    select?: WorkbookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkbookCountOutputType without action
   */
  export type WorkbookCountOutputTypeCountWorksheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksheetWhereInput
  }

  /**
   * WorkbookCountOutputType without action
   */
  export type WorkbookCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * WorkbookCountOutputType without action
   */
  export type WorkbookCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type WorksheetCountOutputType
   */

  export type WorksheetCountOutputType = {
    questions: number
  }

  export type WorksheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | WorksheetCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * WorksheetCountOutputType without action
   */
  export type WorksheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorksheetCountOutputType
     */
    select?: WorksheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorksheetCountOutputType without action
   */
  export type WorksheetCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    annotations: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annotations?: boolean | AnswerCountOutputTypeCountAnnotationsArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uid: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorCode: string | null
    twoFactorVerified: boolean | null
    twoFactorCodeExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    uid: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorCode: string | null
    twoFactorVerified: boolean | null
    twoFactorCodeExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    uid: number
    username: number
    email: number
    role: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    twoFactorCode: number
    twoFactorVerified: number
    twoFactorCodeExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uid?: true
    username?: true
    email?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    twoFactorCode?: true
    twoFactorVerified?: true
    twoFactorCodeExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    uid?: true
    username?: true
    email?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    twoFactorCode?: true
    twoFactorVerified?: true
    twoFactorCodeExpiry?: true
  }

  export type UserCountAggregateInputType = {
    uid?: true
    username?: true
    email?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    twoFactorCode?: true
    twoFactorVerified?: true
    twoFactorCodeExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uid: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    twoFactorCode: string | null
    twoFactorVerified: boolean
    twoFactorCodeExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorCode?: boolean
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: boolean
    workbooks?: boolean | User$workbooksArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    annotations?: boolean | User$annotationsArgs<ExtArgs>
    grades?: boolean | User$gradesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorCode?: boolean
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorCode?: boolean
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uid?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorCode?: boolean
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid" | "username" | "email" | "role" | "avatarUrl" | "createdAt" | "updatedAt" | "twoFactorCode" | "twoFactorVerified" | "twoFactorCodeExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workbooks?: boolean | User$workbooksArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    questions?: boolean | User$questionsArgs<ExtArgs>
    answers?: boolean | User$answersArgs<ExtArgs>
    annotations?: boolean | User$annotationsArgs<ExtArgs>
    grades?: boolean | User$gradesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workbooks: Prisma.$WorkbookPayload<ExtArgs>[]
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      annotations: Prisma.$AnnotationPayload<ExtArgs>[]
      grades: Prisma.$GradePayload<ExtArgs>[]
      approvals: Prisma.$GradePayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid: string
      username: string
      email: string
      role: $Enums.Role
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      twoFactorCode: string | null
      twoFactorVerified: boolean
      twoFactorCodeExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uid`
     * const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.createManyAndReturn({
     *   select: { uid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uid`
     * const userWithUidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workbooks<T extends User$workbooksArgs<ExtArgs> = {}>(args?: Subset<T, User$workbooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    annotations<T extends User$annotationsArgs<ExtArgs> = {}>(args?: Subset<T, User$annotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    grades<T extends User$gradesArgs<ExtArgs> = {}>(args?: Subset<T, User$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly uid: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly twoFactorCode: FieldRef<"User", 'String'>
    readonly twoFactorVerified: FieldRef<"User", 'Boolean'>
    readonly twoFactorCodeExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.workbooks
   */
  export type User$workbooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    where?: WorkbookWhereInput
    orderBy?: WorkbookOrderByWithRelationInput | WorkbookOrderByWithRelationInput[]
    cursor?: WorkbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkbookScalarFieldEnum | WorkbookScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * User.annotations
   */
  export type User$annotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    cursor?: AnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * User.grades
   */
  export type User$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    type: $Enums.AuditLogType | null
    title: string | null
    description: string | null
    createdAt: Date | null
    userId: string | null
    workbookId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AuditLogType | null
    title: string | null
    description: string | null
    createdAt: Date | null
    userId: string | null
    workbookId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    metadata: number
    createdAt: number
    userId: number
    workbookId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    createdAt?: true
    userId?: true
    workbookId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    createdAt?: true
    userId?: true
    workbookId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    metadata?: true
    createdAt?: true
    userId?: true
    workbookId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    type: $Enums.AuditLogType
    title: string
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    userId: string
    workbookId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    userId?: boolean
    workbookId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "metadata" | "createdAt" | "userId" | "workbookId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | AuditLog$workbookArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workbook: Prisma.$WorkbookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AuditLogType
      title: string
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      userId: string
      workbookId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    workbook<T extends AuditLog$workbookArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$workbookArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly type: FieldRef<"AuditLog", 'AuditLogType'>
    readonly title: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly workbookId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.workbook
   */
  export type AuditLog$workbookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    where?: WorkbookWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Workbook
   */

  export type AggregateWorkbook = {
    _count: WorkbookCountAggregateOutputType | null
    _min: WorkbookMinAggregateOutputType | null
    _max: WorkbookMaxAggregateOutputType | null
  }

  export type WorkbookMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tag: string | null
    isPrivate: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    directorId: string | null
  }

  export type WorkbookMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tag: string | null
    isPrivate: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    directorId: string | null
  }

  export type WorkbookCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tag: number
    isPrivate: number
    isArchived: number
    createdAt: number
    updatedAt: number
    directorId: number
    _all: number
  }


  export type WorkbookMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tag?: true
    isPrivate?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
  }

  export type WorkbookMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tag?: true
    isPrivate?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
  }

  export type WorkbookCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tag?: true
    isPrivate?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
    _all?: true
  }

  export type WorkbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workbook to aggregate.
     */
    where?: WorkbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workbooks to fetch.
     */
    orderBy?: WorkbookOrderByWithRelationInput | WorkbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workbooks
    **/
    _count?: true | WorkbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkbookMaxAggregateInputType
  }

  export type GetWorkbookAggregateType<T extends WorkbookAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkbook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkbook[P]>
      : GetScalarType<T[P], AggregateWorkbook[P]>
  }




  export type WorkbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkbookWhereInput
    orderBy?: WorkbookOrderByWithAggregationInput | WorkbookOrderByWithAggregationInput[]
    by: WorkbookScalarFieldEnum[] | WorkbookScalarFieldEnum
    having?: WorkbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkbookCountAggregateInputType | true
    _min?: WorkbookMinAggregateInputType
    _max?: WorkbookMaxAggregateInputType
  }

  export type WorkbookGroupByOutputType = {
    id: string
    name: string
    description: string | null
    tag: string | null
    isPrivate: boolean
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    directorId: string
    _count: WorkbookCountAggregateOutputType | null
    _min: WorkbookMinAggregateOutputType | null
    _max: WorkbookMaxAggregateOutputType | null
  }

  type GetWorkbookGroupByPayload<T extends WorkbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkbookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkbookGroupByOutputType[P]>
            : GetScalarType<T[P], WorkbookGroupByOutputType[P]>
        }
      >
    >


  export type WorkbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tag?: boolean
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
    director?: boolean | UserDefaultArgs<ExtArgs>
    worksheets?: boolean | Workbook$worksheetsArgs<ExtArgs>
    memberships?: boolean | Workbook$membershipsArgs<ExtArgs>
    auditLogs?: boolean | Workbook$auditLogsArgs<ExtArgs>
    _count?: boolean | WorkbookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workbook"]>

  export type WorkbookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tag?: boolean
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
    director?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workbook"]>

  export type WorkbookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tag?: boolean
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
    director?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workbook"]>

  export type WorkbookSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tag?: boolean
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
  }

  export type WorkbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "tag" | "isPrivate" | "isArchived" | "createdAt" | "updatedAt" | "directorId", ExtArgs["result"]["workbook"]>
  export type WorkbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | UserDefaultArgs<ExtArgs>
    worksheets?: boolean | Workbook$worksheetsArgs<ExtArgs>
    memberships?: boolean | Workbook$membershipsArgs<ExtArgs>
    auditLogs?: boolean | Workbook$auditLogsArgs<ExtArgs>
    _count?: boolean | WorkbookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkbookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkbookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workbook"
    objects: {
      director: Prisma.$UserPayload<ExtArgs>
      worksheets: Prisma.$WorksheetPayload<ExtArgs>[]
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      tag: string | null
      isPrivate: boolean
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
      directorId: string
    }, ExtArgs["result"]["workbook"]>
    composites: {}
  }

  type WorkbookGetPayload<S extends boolean | null | undefined | WorkbookDefaultArgs> = $Result.GetResult<Prisma.$WorkbookPayload, S>

  type WorkbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkbookCountAggregateInputType | true
    }

  export interface WorkbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workbook'], meta: { name: 'Workbook' } }
    /**
     * Find zero or one Workbook that matches the filter.
     * @param {WorkbookFindUniqueArgs} args - Arguments to find a Workbook
     * @example
     * // Get one Workbook
     * const workbook = await prisma.workbook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkbookFindUniqueArgs>(args: SelectSubset<T, WorkbookFindUniqueArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Workbook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkbookFindUniqueOrThrowArgs} args - Arguments to find a Workbook
     * @example
     * // Get one Workbook
     * const workbook = await prisma.workbook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkbookFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkbookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Workbook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookFindFirstArgs} args - Arguments to find a Workbook
     * @example
     * // Get one Workbook
     * const workbook = await prisma.workbook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkbookFindFirstArgs>(args?: SelectSubset<T, WorkbookFindFirstArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Workbook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookFindFirstOrThrowArgs} args - Arguments to find a Workbook
     * @example
     * // Get one Workbook
     * const workbook = await prisma.workbook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkbookFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkbookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Workbooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workbooks
     * const workbooks = await prisma.workbook.findMany()
     * 
     * // Get first 10 Workbooks
     * const workbooks = await prisma.workbook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workbookWithIdOnly = await prisma.workbook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkbookFindManyArgs>(args?: SelectSubset<T, WorkbookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Workbook.
     * @param {WorkbookCreateArgs} args - Arguments to create a Workbook.
     * @example
     * // Create one Workbook
     * const Workbook = await prisma.workbook.create({
     *   data: {
     *     // ... data to create a Workbook
     *   }
     * })
     * 
     */
    create<T extends WorkbookCreateArgs>(args: SelectSubset<T, WorkbookCreateArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Workbooks.
     * @param {WorkbookCreateManyArgs} args - Arguments to create many Workbooks.
     * @example
     * // Create many Workbooks
     * const workbook = await prisma.workbook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkbookCreateManyArgs>(args?: SelectSubset<T, WorkbookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workbooks and returns the data saved in the database.
     * @param {WorkbookCreateManyAndReturnArgs} args - Arguments to create many Workbooks.
     * @example
     * // Create many Workbooks
     * const workbook = await prisma.workbook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workbooks and only return the `id`
     * const workbookWithIdOnly = await prisma.workbook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkbookCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkbookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Workbook.
     * @param {WorkbookDeleteArgs} args - Arguments to delete one Workbook.
     * @example
     * // Delete one Workbook
     * const Workbook = await prisma.workbook.delete({
     *   where: {
     *     // ... filter to delete one Workbook
     *   }
     * })
     * 
     */
    delete<T extends WorkbookDeleteArgs>(args: SelectSubset<T, WorkbookDeleteArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Workbook.
     * @param {WorkbookUpdateArgs} args - Arguments to update one Workbook.
     * @example
     * // Update one Workbook
     * const workbook = await prisma.workbook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkbookUpdateArgs>(args: SelectSubset<T, WorkbookUpdateArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Workbooks.
     * @param {WorkbookDeleteManyArgs} args - Arguments to filter Workbooks to delete.
     * @example
     * // Delete a few Workbooks
     * const { count } = await prisma.workbook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkbookDeleteManyArgs>(args?: SelectSubset<T, WorkbookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workbooks
     * const workbook = await prisma.workbook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkbookUpdateManyArgs>(args: SelectSubset<T, WorkbookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workbooks and returns the data updated in the database.
     * @param {WorkbookUpdateManyAndReturnArgs} args - Arguments to update many Workbooks.
     * @example
     * // Update many Workbooks
     * const workbook = await prisma.workbook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workbooks and only return the `id`
     * const workbookWithIdOnly = await prisma.workbook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkbookUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkbookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Workbook.
     * @param {WorkbookUpsertArgs} args - Arguments to update or create a Workbook.
     * @example
     * // Update or create a Workbook
     * const workbook = await prisma.workbook.upsert({
     *   create: {
     *     // ... data to create a Workbook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workbook we want to update
     *   }
     * })
     */
    upsert<T extends WorkbookUpsertArgs>(args: SelectSubset<T, WorkbookUpsertArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Workbooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookCountArgs} args - Arguments to filter Workbooks to count.
     * @example
     * // Count the number of Workbooks
     * const count = await prisma.workbook.count({
     *   where: {
     *     // ... the filter for the Workbooks we want to count
     *   }
     * })
    **/
    count<T extends WorkbookCountArgs>(
      args?: Subset<T, WorkbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkbookAggregateArgs>(args: Subset<T, WorkbookAggregateArgs>): Prisma.PrismaPromise<GetWorkbookAggregateType<T>>

    /**
     * Group by Workbook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkbookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkbookGroupByArgs['orderBy'] }
        : { orderBy?: WorkbookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workbook model
   */
  readonly fields: WorkbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workbook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    director<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    worksheets<T extends Workbook$worksheetsArgs<ExtArgs> = {}>(args?: Subset<T, Workbook$worksheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    memberships<T extends Workbook$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Workbook$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    auditLogs<T extends Workbook$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workbook$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workbook model
   */ 
  interface WorkbookFieldRefs {
    readonly id: FieldRef<"Workbook", 'String'>
    readonly name: FieldRef<"Workbook", 'String'>
    readonly description: FieldRef<"Workbook", 'String'>
    readonly tag: FieldRef<"Workbook", 'String'>
    readonly isPrivate: FieldRef<"Workbook", 'Boolean'>
    readonly isArchived: FieldRef<"Workbook", 'Boolean'>
    readonly createdAt: FieldRef<"Workbook", 'DateTime'>
    readonly updatedAt: FieldRef<"Workbook", 'DateTime'>
    readonly directorId: FieldRef<"Workbook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workbook findUnique
   */
  export type WorkbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter, which Workbook to fetch.
     */
    where: WorkbookWhereUniqueInput
  }

  /**
   * Workbook findUniqueOrThrow
   */
  export type WorkbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter, which Workbook to fetch.
     */
    where: WorkbookWhereUniqueInput
  }

  /**
   * Workbook findFirst
   */
  export type WorkbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter, which Workbook to fetch.
     */
    where?: WorkbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workbooks to fetch.
     */
    orderBy?: WorkbookOrderByWithRelationInput | WorkbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workbooks.
     */
    cursor?: WorkbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workbooks.
     */
    distinct?: WorkbookScalarFieldEnum | WorkbookScalarFieldEnum[]
  }

  /**
   * Workbook findFirstOrThrow
   */
  export type WorkbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter, which Workbook to fetch.
     */
    where?: WorkbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workbooks to fetch.
     */
    orderBy?: WorkbookOrderByWithRelationInput | WorkbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workbooks.
     */
    cursor?: WorkbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workbooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workbooks.
     */
    distinct?: WorkbookScalarFieldEnum | WorkbookScalarFieldEnum[]
  }

  /**
   * Workbook findMany
   */
  export type WorkbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter, which Workbooks to fetch.
     */
    where?: WorkbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workbooks to fetch.
     */
    orderBy?: WorkbookOrderByWithRelationInput | WorkbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workbooks.
     */
    cursor?: WorkbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workbooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workbooks.
     */
    skip?: number
    distinct?: WorkbookScalarFieldEnum | WorkbookScalarFieldEnum[]
  }

  /**
   * Workbook create
   */
  export type WorkbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * The data needed to create a Workbook.
     */
    data: XOR<WorkbookCreateInput, WorkbookUncheckedCreateInput>
  }

  /**
   * Workbook createMany
   */
  export type WorkbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workbooks.
     */
    data: WorkbookCreateManyInput | WorkbookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workbook createManyAndReturn
   */
  export type WorkbookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * The data used to create many Workbooks.
     */
    data: WorkbookCreateManyInput | WorkbookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workbook update
   */
  export type WorkbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * The data needed to update a Workbook.
     */
    data: XOR<WorkbookUpdateInput, WorkbookUncheckedUpdateInput>
    /**
     * Choose, which Workbook to update.
     */
    where: WorkbookWhereUniqueInput
  }

  /**
   * Workbook updateMany
   */
  export type WorkbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workbooks.
     */
    data: XOR<WorkbookUpdateManyMutationInput, WorkbookUncheckedUpdateManyInput>
    /**
     * Filter which Workbooks to update
     */
    where?: WorkbookWhereInput
  }

  /**
   * Workbook updateManyAndReturn
   */
  export type WorkbookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * The data used to update Workbooks.
     */
    data: XOR<WorkbookUpdateManyMutationInput, WorkbookUncheckedUpdateManyInput>
    /**
     * Filter which Workbooks to update
     */
    where?: WorkbookWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workbook upsert
   */
  export type WorkbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * The filter to search for the Workbook to update in case it exists.
     */
    where: WorkbookWhereUniqueInput
    /**
     * In case the Workbook found by the `where` argument doesn't exist, create a new Workbook with this data.
     */
    create: XOR<WorkbookCreateInput, WorkbookUncheckedCreateInput>
    /**
     * In case the Workbook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkbookUpdateInput, WorkbookUncheckedUpdateInput>
  }

  /**
   * Workbook delete
   */
  export type WorkbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
    /**
     * Filter which Workbook to delete.
     */
    where: WorkbookWhereUniqueInput
  }

  /**
   * Workbook deleteMany
   */
  export type WorkbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workbooks to delete
     */
    where?: WorkbookWhereInput
  }

  /**
   * Workbook.worksheets
   */
  export type Workbook$worksheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    where?: WorksheetWhereInput
    orderBy?: WorksheetOrderByWithRelationInput | WorksheetOrderByWithRelationInput[]
    cursor?: WorksheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksheetScalarFieldEnum | WorksheetScalarFieldEnum[]
  }

  /**
   * Workbook.memberships
   */
  export type Workbook$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Workbook.auditLogs
   */
  export type Workbook$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Workbook without action
   */
  export type WorkbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workbook
     */
    select?: WorkbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workbook
     */
    omit?: WorkbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkbookInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
    userId: string | null
    workbookId: string | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
    userId: string | null
    workbookId: string | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    role: number
    joinedAt: number
    userId: number
    workbookId: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    workbookId?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    workbookId?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    workbookId?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    role: $Enums.Role
    joinedAt: Date
    userId: string
    workbookId: string
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    workbookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    workbookId?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "joinedAt" | "userId" | "workbookId", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workbook: Prisma.$WorkbookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      joinedAt: Date
      userId: string
      workbookId: string
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {MembershipUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    workbook<T extends WorkbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkbookDefaultArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly role: FieldRef<"Membership", 'Role'>
    readonly joinedAt: FieldRef<"Membership", 'DateTime'>
    readonly userId: FieldRef<"Membership", 'String'>
    readonly workbookId: FieldRef<"Membership", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership updateManyAndReturn
   */
  export type MembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model Worksheet
   */

  export type AggregateWorksheet = {
    _count: WorksheetCountAggregateOutputType | null
    _avg: WorksheetAvgAggregateOutputType | null
    _sum: WorksheetSumAggregateOutputType | null
    _min: WorksheetMinAggregateOutputType | null
    _max: WorksheetMaxAggregateOutputType | null
  }

  export type WorksheetAvgAggregateOutputType = {
    order: number | null
  }

  export type WorksheetSumAggregateOutputType = {
    order: number | null
  }

  export type WorksheetMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    isLocked: boolean | null
    yjsState: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    workbookId: string | null
  }

  export type WorksheetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    isLocked: boolean | null
    yjsState: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    workbookId: string | null
  }

  export type WorksheetCountAggregateOutputType = {
    id: number
    title: number
    description: number
    order: number
    isLocked: number
    yjsState: number
    createdAt: number
    updatedAt: number
    workbookId: number
    _all: number
  }


  export type WorksheetAvgAggregateInputType = {
    order?: true
  }

  export type WorksheetSumAggregateInputType = {
    order?: true
  }

  export type WorksheetMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    isLocked?: true
    yjsState?: true
    createdAt?: true
    updatedAt?: true
    workbookId?: true
  }

  export type WorksheetMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    isLocked?: true
    yjsState?: true
    createdAt?: true
    updatedAt?: true
    workbookId?: true
  }

  export type WorksheetCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    isLocked?: true
    yjsState?: true
    createdAt?: true
    updatedAt?: true
    workbookId?: true
    _all?: true
  }

  export type WorksheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksheet to aggregate.
     */
    where?: WorksheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksheets to fetch.
     */
    orderBy?: WorksheetOrderByWithRelationInput | WorksheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worksheets
    **/
    _count?: true | WorksheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorksheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorksheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksheetMaxAggregateInputType
  }

  export type GetWorksheetAggregateType<T extends WorksheetAggregateArgs> = {
        [P in keyof T & keyof AggregateWorksheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorksheet[P]>
      : GetScalarType<T[P], AggregateWorksheet[P]>
  }




  export type WorksheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksheetWhereInput
    orderBy?: WorksheetOrderByWithAggregationInput | WorksheetOrderByWithAggregationInput[]
    by: WorksheetScalarFieldEnum[] | WorksheetScalarFieldEnum
    having?: WorksheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksheetCountAggregateInputType | true
    _avg?: WorksheetAvgAggregateInputType
    _sum?: WorksheetSumAggregateInputType
    _min?: WorksheetMinAggregateInputType
    _max?: WorksheetMaxAggregateInputType
  }

  export type WorksheetGroupByOutputType = {
    id: string
    title: string
    description: string
    order: number
    isLocked: boolean
    yjsState: Uint8Array | null
    createdAt: Date
    updatedAt: Date
    workbookId: string
    _count: WorksheetCountAggregateOutputType | null
    _avg: WorksheetAvgAggregateOutputType | null
    _sum: WorksheetSumAggregateOutputType | null
    _min: WorksheetMinAggregateOutputType | null
    _max: WorksheetMaxAggregateOutputType | null
  }

  type GetWorksheetGroupByPayload<T extends WorksheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksheetGroupByOutputType[P]>
            : GetScalarType<T[P], WorksheetGroupByOutputType[P]>
        }
      >
    >


  export type WorksheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isLocked?: boolean
    yjsState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workbookId?: boolean
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
    questions?: boolean | Worksheet$questionsArgs<ExtArgs>
    _count?: boolean | WorksheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksheet"]>

  export type WorksheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isLocked?: boolean
    yjsState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workbookId?: boolean
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksheet"]>

  export type WorksheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isLocked?: boolean
    yjsState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workbookId?: boolean
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worksheet"]>

  export type WorksheetSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isLocked?: boolean
    yjsState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workbookId?: boolean
  }

  export type WorksheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "order" | "isLocked" | "yjsState" | "createdAt" | "updatedAt" | "workbookId", ExtArgs["result"]["worksheet"]>
  export type WorksheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
    questions?: boolean | Worksheet$questionsArgs<ExtArgs>
    _count?: boolean | WorksheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorksheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }
  export type WorksheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workbook?: boolean | WorkbookDefaultArgs<ExtArgs>
  }

  export type $WorksheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worksheet"
    objects: {
      workbook: Prisma.$WorkbookPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      order: number
      isLocked: boolean
      yjsState: Uint8Array | null
      createdAt: Date
      updatedAt: Date
      workbookId: string
    }, ExtArgs["result"]["worksheet"]>
    composites: {}
  }

  type WorksheetGetPayload<S extends boolean | null | undefined | WorksheetDefaultArgs> = $Result.GetResult<Prisma.$WorksheetPayload, S>

  type WorksheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksheetCountAggregateInputType | true
    }

  export interface WorksheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worksheet'], meta: { name: 'Worksheet' } }
    /**
     * Find zero or one Worksheet that matches the filter.
     * @param {WorksheetFindUniqueArgs} args - Arguments to find a Worksheet
     * @example
     * // Get one Worksheet
     * const worksheet = await prisma.worksheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksheetFindUniqueArgs>(args: SelectSubset<T, WorksheetFindUniqueArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Worksheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksheetFindUniqueOrThrowArgs} args - Arguments to find a Worksheet
     * @example
     * // Get one Worksheet
     * const worksheet = await prisma.worksheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksheetFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Worksheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetFindFirstArgs} args - Arguments to find a Worksheet
     * @example
     * // Get one Worksheet
     * const worksheet = await prisma.worksheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksheetFindFirstArgs>(args?: SelectSubset<T, WorksheetFindFirstArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Worksheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetFindFirstOrThrowArgs} args - Arguments to find a Worksheet
     * @example
     * // Get one Worksheet
     * const worksheet = await prisma.worksheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksheetFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Worksheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worksheets
     * const worksheets = await prisma.worksheet.findMany()
     * 
     * // Get first 10 Worksheets
     * const worksheets = await prisma.worksheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksheetWithIdOnly = await prisma.worksheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksheetFindManyArgs>(args?: SelectSubset<T, WorksheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Worksheet.
     * @param {WorksheetCreateArgs} args - Arguments to create a Worksheet.
     * @example
     * // Create one Worksheet
     * const Worksheet = await prisma.worksheet.create({
     *   data: {
     *     // ... data to create a Worksheet
     *   }
     * })
     * 
     */
    create<T extends WorksheetCreateArgs>(args: SelectSubset<T, WorksheetCreateArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Worksheets.
     * @param {WorksheetCreateManyArgs} args - Arguments to create many Worksheets.
     * @example
     * // Create many Worksheets
     * const worksheet = await prisma.worksheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksheetCreateManyArgs>(args?: SelectSubset<T, WorksheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worksheets and returns the data saved in the database.
     * @param {WorksheetCreateManyAndReturnArgs} args - Arguments to create many Worksheets.
     * @example
     * // Create many Worksheets
     * const worksheet = await prisma.worksheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worksheets and only return the `id`
     * const worksheetWithIdOnly = await prisma.worksheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksheetCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Worksheet.
     * @param {WorksheetDeleteArgs} args - Arguments to delete one Worksheet.
     * @example
     * // Delete one Worksheet
     * const Worksheet = await prisma.worksheet.delete({
     *   where: {
     *     // ... filter to delete one Worksheet
     *   }
     * })
     * 
     */
    delete<T extends WorksheetDeleteArgs>(args: SelectSubset<T, WorksheetDeleteArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Worksheet.
     * @param {WorksheetUpdateArgs} args - Arguments to update one Worksheet.
     * @example
     * // Update one Worksheet
     * const worksheet = await prisma.worksheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksheetUpdateArgs>(args: SelectSubset<T, WorksheetUpdateArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Worksheets.
     * @param {WorksheetDeleteManyArgs} args - Arguments to filter Worksheets to delete.
     * @example
     * // Delete a few Worksheets
     * const { count } = await prisma.worksheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksheetDeleteManyArgs>(args?: SelectSubset<T, WorksheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worksheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worksheets
     * const worksheet = await prisma.worksheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksheetUpdateManyArgs>(args: SelectSubset<T, WorksheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worksheets and returns the data updated in the database.
     * @param {WorksheetUpdateManyAndReturnArgs} args - Arguments to update many Worksheets.
     * @example
     * // Update many Worksheets
     * const worksheet = await prisma.worksheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worksheets and only return the `id`
     * const worksheetWithIdOnly = await prisma.worksheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksheetUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Worksheet.
     * @param {WorksheetUpsertArgs} args - Arguments to update or create a Worksheet.
     * @example
     * // Update or create a Worksheet
     * const worksheet = await prisma.worksheet.upsert({
     *   create: {
     *     // ... data to create a Worksheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worksheet we want to update
     *   }
     * })
     */
    upsert<T extends WorksheetUpsertArgs>(args: SelectSubset<T, WorksheetUpsertArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Worksheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetCountArgs} args - Arguments to filter Worksheets to count.
     * @example
     * // Count the number of Worksheets
     * const count = await prisma.worksheet.count({
     *   where: {
     *     // ... the filter for the Worksheets we want to count
     *   }
     * })
    **/
    count<T extends WorksheetCountArgs>(
      args?: Subset<T, WorksheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worksheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksheetAggregateArgs>(args: Subset<T, WorksheetAggregateArgs>): Prisma.PrismaPromise<GetWorksheetAggregateType<T>>

    /**
     * Group by Worksheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksheetGroupByArgs['orderBy'] }
        : { orderBy?: WorksheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worksheet model
   */
  readonly fields: WorksheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worksheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workbook<T extends WorkbookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkbookDefaultArgs<ExtArgs>>): Prisma__WorkbookClient<$Result.GetResult<Prisma.$WorkbookPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    questions<T extends Worksheet$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Worksheet$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worksheet model
   */ 
  interface WorksheetFieldRefs {
    readonly id: FieldRef<"Worksheet", 'String'>
    readonly title: FieldRef<"Worksheet", 'String'>
    readonly description: FieldRef<"Worksheet", 'String'>
    readonly order: FieldRef<"Worksheet", 'Int'>
    readonly isLocked: FieldRef<"Worksheet", 'Boolean'>
    readonly yjsState: FieldRef<"Worksheet", 'Bytes'>
    readonly createdAt: FieldRef<"Worksheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Worksheet", 'DateTime'>
    readonly workbookId: FieldRef<"Worksheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Worksheet findUnique
   */
  export type WorksheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter, which Worksheet to fetch.
     */
    where: WorksheetWhereUniqueInput
  }

  /**
   * Worksheet findUniqueOrThrow
   */
  export type WorksheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter, which Worksheet to fetch.
     */
    where: WorksheetWhereUniqueInput
  }

  /**
   * Worksheet findFirst
   */
  export type WorksheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter, which Worksheet to fetch.
     */
    where?: WorksheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksheets to fetch.
     */
    orderBy?: WorksheetOrderByWithRelationInput | WorksheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksheets.
     */
    cursor?: WorksheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksheets.
     */
    distinct?: WorksheetScalarFieldEnum | WorksheetScalarFieldEnum[]
  }

  /**
   * Worksheet findFirstOrThrow
   */
  export type WorksheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter, which Worksheet to fetch.
     */
    where?: WorksheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksheets to fetch.
     */
    orderBy?: WorksheetOrderByWithRelationInput | WorksheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worksheets.
     */
    cursor?: WorksheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worksheets.
     */
    distinct?: WorksheetScalarFieldEnum | WorksheetScalarFieldEnum[]
  }

  /**
   * Worksheet findMany
   */
  export type WorksheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter, which Worksheets to fetch.
     */
    where?: WorksheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worksheets to fetch.
     */
    orderBy?: WorksheetOrderByWithRelationInput | WorksheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worksheets.
     */
    cursor?: WorksheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worksheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worksheets.
     */
    skip?: number
    distinct?: WorksheetScalarFieldEnum | WorksheetScalarFieldEnum[]
  }

  /**
   * Worksheet create
   */
  export type WorksheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Worksheet.
     */
    data: XOR<WorksheetCreateInput, WorksheetUncheckedCreateInput>
  }

  /**
   * Worksheet createMany
   */
  export type WorksheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worksheets.
     */
    data: WorksheetCreateManyInput | WorksheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worksheet createManyAndReturn
   */
  export type WorksheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * The data used to create many Worksheets.
     */
    data: WorksheetCreateManyInput | WorksheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Worksheet update
   */
  export type WorksheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Worksheet.
     */
    data: XOR<WorksheetUpdateInput, WorksheetUncheckedUpdateInput>
    /**
     * Choose, which Worksheet to update.
     */
    where: WorksheetWhereUniqueInput
  }

  /**
   * Worksheet updateMany
   */
  export type WorksheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worksheets.
     */
    data: XOR<WorksheetUpdateManyMutationInput, WorksheetUncheckedUpdateManyInput>
    /**
     * Filter which Worksheets to update
     */
    where?: WorksheetWhereInput
  }

  /**
   * Worksheet updateManyAndReturn
   */
  export type WorksheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * The data used to update Worksheets.
     */
    data: XOR<WorksheetUpdateManyMutationInput, WorksheetUncheckedUpdateManyInput>
    /**
     * Filter which Worksheets to update
     */
    where?: WorksheetWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Worksheet upsert
   */
  export type WorksheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Worksheet to update in case it exists.
     */
    where: WorksheetWhereUniqueInput
    /**
     * In case the Worksheet found by the `where` argument doesn't exist, create a new Worksheet with this data.
     */
    create: XOR<WorksheetCreateInput, WorksheetUncheckedCreateInput>
    /**
     * In case the Worksheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksheetUpdateInput, WorksheetUncheckedUpdateInput>
  }

  /**
   * Worksheet delete
   */
  export type WorksheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
    /**
     * Filter which Worksheet to delete.
     */
    where: WorksheetWhereUniqueInput
  }

  /**
   * Worksheet deleteMany
   */
  export type WorksheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worksheets to delete
     */
    where?: WorksheetWhereInput
  }

  /**
   * Worksheet.questions
   */
  export type Worksheet$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Worksheet without action
   */
  export type WorksheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worksheet
     */
    select?: WorksheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worksheet
     */
    omit?: WorksheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksheetInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    worksheetId: string | null
    teacherId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    order: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    worksheetId: string | null
    teacherId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    order: number
    isRequired: number
    createdAt: number
    updatedAt: number
    worksheetId: number
    teacherId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    worksheetId?: true
    teacherId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    worksheetId?: true
    teacherId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    worksheetId?: true
    teacherId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    order: number
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    worksheetId: string
    teacherId: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    worksheetId?: boolean
    teacherId?: boolean
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    worksheetId?: boolean
    teacherId?: boolean
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    worksheetId?: boolean
    teacherId?: boolean
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    worksheetId?: boolean
    teacherId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "order" | "isRequired" | "createdAt" | "updatedAt" | "worksheetId" | "teacherId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worksheet?: boolean | WorksheetDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      worksheet: Prisma.$WorksheetPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      order: number
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
      worksheetId: string
      teacherId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worksheet<T extends WorksheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorksheetDefaultArgs<ExtArgs>>): Prisma__WorksheetClient<$Result.GetResult<Prisma.$WorksheetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly isRequired: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly worksheetId: FieldRef<"Question", 'String'>
    readonly teacherId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    text: string | null
    status: $Enums.AnswerStatus | null
    yjsState: Uint8Array | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
    studentId: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    text: string | null
    status: $Enums.AnswerStatus | null
    yjsState: Uint8Array | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    questionId: string | null
    studentId: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    text: number
    status: number
    yjsState: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    questionId: number
    studentId: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    text?: true
    status?: true
    yjsState?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    studentId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    text?: true
    status?: true
    yjsState?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    studentId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    text?: true
    status?: true
    yjsState?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    questionId?: true
    studentId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    text: string
    status: $Enums.AnswerStatus
    yjsState: Uint8Array | null
    submittedAt: Date | null
    createdAt: Date
    updatedAt: Date
    questionId: string
    studentId: string
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    status?: boolean
    yjsState?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    studentId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    annotations?: boolean | Answer$annotationsArgs<ExtArgs>
    grade?: boolean | Answer$gradeArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    status?: boolean
    yjsState?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    studentId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    status?: boolean
    yjsState?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    studentId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    text?: boolean
    status?: boolean
    yjsState?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questionId?: boolean
    studentId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "status" | "yjsState" | "submittedAt" | "createdAt" | "updatedAt" | "questionId" | "studentId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    annotations?: boolean | Answer$annotationsArgs<ExtArgs>
    grade?: boolean | Answer$gradeArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      annotations: Prisma.$AnnotationPayload<ExtArgs>[]
      grade: Prisma.$GradePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      status: $Enums.AnswerStatus
      yjsState: Uint8Array | null
      submittedAt: Date | null
      createdAt: Date
      updatedAt: Date
      questionId: string
      studentId: string
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    annotations<T extends Answer$annotationsArgs<ExtArgs> = {}>(args?: Subset<T, Answer$annotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    grade<T extends Answer$gradeArgs<ExtArgs> = {}>(args?: Subset<T, Answer$gradeArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */ 
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly status: FieldRef<"Answer", 'AnswerStatus'>
    readonly yjsState: FieldRef<"Answer", 'Bytes'>
    readonly submittedAt: FieldRef<"Answer", 'DateTime'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly updatedAt: FieldRef<"Answer", 'DateTime'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly studentId: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }

  /**
   * Answer.annotations
   */
  export type Answer$annotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    cursor?: AnnotationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Answer.grade
   */
  export type Answer$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Annotation
   */

  export type AggregateAnnotation = {
    _count: AnnotationCountAggregateOutputType | null
    _min: AnnotationMinAggregateOutputType | null
    _max: AnnotationMaxAggregateOutputType | null
  }

  export type AnnotationMinAggregateOutputType = {
    id: string | null
    comment: string | null
    suggestedText: string | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    answerId: string | null
    teacherId: string | null
  }

  export type AnnotationMaxAggregateOutputType = {
    id: string | null
    comment: string | null
    suggestedText: string | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    answerId: string | null
    teacherId: string | null
  }

  export type AnnotationCountAggregateOutputType = {
    id: number
    comment: number
    suggestedText: number
    resolvedAt: number
    createdAt: number
    updatedAt: number
    answerId: number
    teacherId: number
    _all: number
  }


  export type AnnotationMinAggregateInputType = {
    id?: true
    comment?: true
    suggestedText?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
    teacherId?: true
  }

  export type AnnotationMaxAggregateInputType = {
    id?: true
    comment?: true
    suggestedText?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
    teacherId?: true
  }

  export type AnnotationCountAggregateInputType = {
    id?: true
    comment?: true
    suggestedText?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
    teacherId?: true
    _all?: true
  }

  export type AnnotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotation to aggregate.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annotations
    **/
    _count?: true | AnnotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnotationMaxAggregateInputType
  }

  export type GetAnnotationAggregateType<T extends AnnotationAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnotation[P]>
      : GetScalarType<T[P], AggregateAnnotation[P]>
  }




  export type AnnotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationWhereInput
    orderBy?: AnnotationOrderByWithAggregationInput | AnnotationOrderByWithAggregationInput[]
    by: AnnotationScalarFieldEnum[] | AnnotationScalarFieldEnum
    having?: AnnotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnotationCountAggregateInputType | true
    _min?: AnnotationMinAggregateInputType
    _max?: AnnotationMaxAggregateInputType
  }

  export type AnnotationGroupByOutputType = {
    id: string
    comment: string
    suggestedText: string | null
    resolvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    answerId: string
    teacherId: string
    _count: AnnotationCountAggregateOutputType | null
    _min: AnnotationMinAggregateOutputType | null
    _max: AnnotationMaxAggregateOutputType | null
  }

  type GetAnnotationGroupByPayload<T extends AnnotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnotationGroupByOutputType[P]>
            : GetScalarType<T[P], AnnotationGroupByOutputType[P]>
        }
      >
    >


  export type AnnotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    suggestedText?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    suggestedText?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    suggestedText?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotation"]>

  export type AnnotationSelectScalar = {
    id?: boolean
    comment?: boolean
    suggestedText?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
  }

  export type AnnotationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "suggestedText" | "resolvedAt" | "createdAt" | "updatedAt" | "answerId" | "teacherId", ExtArgs["result"]["annotation"]>
  export type AnnotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnotationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annotation"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comment: string
      suggestedText: string | null
      resolvedAt: Date | null
      createdAt: Date
      updatedAt: Date
      answerId: string
      teacherId: string
    }, ExtArgs["result"]["annotation"]>
    composites: {}
  }

  type AnnotationGetPayload<S extends boolean | null | undefined | AnnotationDefaultArgs> = $Result.GetResult<Prisma.$AnnotationPayload, S>

  type AnnotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnotationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnotationCountAggregateInputType | true
    }

  export interface AnnotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annotation'], meta: { name: 'Annotation' } }
    /**
     * Find zero or one Annotation that matches the filter.
     * @param {AnnotationFindUniqueArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnotationFindUniqueArgs>(args: SelectSubset<T, AnnotationFindUniqueArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Annotation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnotationFindUniqueOrThrowArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnotationFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Annotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindFirstArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnotationFindFirstArgs>(args?: SelectSubset<T, AnnotationFindFirstArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Annotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindFirstOrThrowArgs} args - Arguments to find a Annotation
     * @example
     * // Get one Annotation
     * const annotation = await prisma.annotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnotationFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Annotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annotations
     * const annotations = await prisma.annotation.findMany()
     * 
     * // Get first 10 Annotations
     * const annotations = await prisma.annotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annotationWithIdOnly = await prisma.annotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnotationFindManyArgs>(args?: SelectSubset<T, AnnotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Annotation.
     * @param {AnnotationCreateArgs} args - Arguments to create a Annotation.
     * @example
     * // Create one Annotation
     * const Annotation = await prisma.annotation.create({
     *   data: {
     *     // ... data to create a Annotation
     *   }
     * })
     * 
     */
    create<T extends AnnotationCreateArgs>(args: SelectSubset<T, AnnotationCreateArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Annotations.
     * @param {AnnotationCreateManyArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotation = await prisma.annotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnotationCreateManyArgs>(args?: SelectSubset<T, AnnotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annotations and returns the data saved in the database.
     * @param {AnnotationCreateManyAndReturnArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotation = await prisma.annotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annotations and only return the `id`
     * const annotationWithIdOnly = await prisma.annotation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnotationCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Annotation.
     * @param {AnnotationDeleteArgs} args - Arguments to delete one Annotation.
     * @example
     * // Delete one Annotation
     * const Annotation = await prisma.annotation.delete({
     *   where: {
     *     // ... filter to delete one Annotation
     *   }
     * })
     * 
     */
    delete<T extends AnnotationDeleteArgs>(args: SelectSubset<T, AnnotationDeleteArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Annotation.
     * @param {AnnotationUpdateArgs} args - Arguments to update one Annotation.
     * @example
     * // Update one Annotation
     * const annotation = await prisma.annotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnotationUpdateArgs>(args: SelectSubset<T, AnnotationUpdateArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Annotations.
     * @param {AnnotationDeleteManyArgs} args - Arguments to filter Annotations to delete.
     * @example
     * // Delete a few Annotations
     * const { count } = await prisma.annotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnotationDeleteManyArgs>(args?: SelectSubset<T, AnnotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annotations
     * const annotation = await prisma.annotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnotationUpdateManyArgs>(args: SelectSubset<T, AnnotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations and returns the data updated in the database.
     * @param {AnnotationUpdateManyAndReturnArgs} args - Arguments to update many Annotations.
     * @example
     * // Update many Annotations
     * const annotation = await prisma.annotation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annotations and only return the `id`
     * const annotationWithIdOnly = await prisma.annotation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnotationUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnotationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Annotation.
     * @param {AnnotationUpsertArgs} args - Arguments to update or create a Annotation.
     * @example
     * // Update or create a Annotation
     * const annotation = await prisma.annotation.upsert({
     *   create: {
     *     // ... data to create a Annotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annotation we want to update
     *   }
     * })
     */
    upsert<T extends AnnotationUpsertArgs>(args: SelectSubset<T, AnnotationUpsertArgs<ExtArgs>>): Prisma__AnnotationClient<$Result.GetResult<Prisma.$AnnotationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationCountArgs} args - Arguments to filter Annotations to count.
     * @example
     * // Count the number of Annotations
     * const count = await prisma.annotation.count({
     *   where: {
     *     // ... the filter for the Annotations we want to count
     *   }
     * })
    **/
    count<T extends AnnotationCountArgs>(
      args?: Subset<T, AnnotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnotationAggregateArgs>(args: Subset<T, AnnotationAggregateArgs>): Prisma.PrismaPromise<GetAnnotationAggregateType<T>>

    /**
     * Group by Annotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnotationGroupByArgs['orderBy'] }
        : { orderBy?: AnnotationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annotation model
   */
  readonly fields: AnnotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Annotation model
   */ 
  interface AnnotationFieldRefs {
    readonly id: FieldRef<"Annotation", 'String'>
    readonly comment: FieldRef<"Annotation", 'String'>
    readonly suggestedText: FieldRef<"Annotation", 'String'>
    readonly resolvedAt: FieldRef<"Annotation", 'DateTime'>
    readonly createdAt: FieldRef<"Annotation", 'DateTime'>
    readonly updatedAt: FieldRef<"Annotation", 'DateTime'>
    readonly answerId: FieldRef<"Annotation", 'String'>
    readonly teacherId: FieldRef<"Annotation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Annotation findUnique
   */
  export type AnnotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation findUniqueOrThrow
   */
  export type AnnotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation findFirst
   */
  export type AnnotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation findFirstOrThrow
   */
  export type AnnotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotation to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation findMany
   */
  export type AnnotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where?: AnnotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationOrderByWithRelationInput | AnnotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annotations.
     */
    cursor?: AnnotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    distinct?: AnnotationScalarFieldEnum | AnnotationScalarFieldEnum[]
  }

  /**
   * Annotation create
   */
  export type AnnotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Annotation.
     */
    data: XOR<AnnotationCreateInput, AnnotationUncheckedCreateInput>
  }

  /**
   * Annotation createMany
   */
  export type AnnotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationCreateManyInput | AnnotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annotation createManyAndReturn
   */
  export type AnnotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationCreateManyInput | AnnotationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotation update
   */
  export type AnnotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Annotation.
     */
    data: XOR<AnnotationUpdateInput, AnnotationUncheckedUpdateInput>
    /**
     * Choose, which Annotation to update.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation updateMany
   */
  export type AnnotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationWhereInput
  }

  /**
   * Annotation updateManyAndReturn
   */
  export type AnnotationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotation upsert
   */
  export type AnnotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Annotation to update in case it exists.
     */
    where: AnnotationWhereUniqueInput
    /**
     * In case the Annotation found by the `where` argument doesn't exist, create a new Annotation with this data.
     */
    create: XOR<AnnotationCreateInput, AnnotationUncheckedCreateInput>
    /**
     * In case the Annotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnotationUpdateInput, AnnotationUncheckedUpdateInput>
  }

  /**
   * Annotation delete
   */
  export type AnnotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
    /**
     * Filter which Annotation to delete.
     */
    where: AnnotationWhereUniqueInput
  }

  /**
   * Annotation deleteMany
   */
  export type AnnotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotations to delete
     */
    where?: AnnotationWhereInput
  }

  /**
   * Annotation without action
   */
  export type AnnotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotation
     */
    select?: AnnotationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotation
     */
    omit?: AnnotationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type GradeSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: string | null
    score: number | null
    maxScore: number | null
    feedback: string | null
    status: $Enums.GradeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    approvedAt: Date | null
    answerId: string | null
    teacherId: string | null
    approvedById: string | null
  }

  export type GradeMaxAggregateOutputType = {
    id: string | null
    score: number | null
    maxScore: number | null
    feedback: string | null
    status: $Enums.GradeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    approvedAt: Date | null
    answerId: string | null
    teacherId: string | null
    approvedById: string | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    score: number
    maxScore: number
    feedback: number
    status: number
    createdAt: number
    updatedAt: number
    approvedAt: number
    answerId: number
    teacherId: number
    approvedById: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type GradeSumAggregateInputType = {
    score?: true
    maxScore?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    score?: true
    maxScore?: true
    feedback?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    approvedAt?: true
    answerId?: true
    teacherId?: true
    approvedById?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    score?: true
    maxScore?: true
    feedback?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    approvedAt?: true
    answerId?: true
    teacherId?: true
    approvedById?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    score?: true
    maxScore?: true
    feedback?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    approvedAt?: true
    answerId?: true
    teacherId?: true
    approvedById?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: string
    score: number
    maxScore: number
    feedback: string | null
    status: $Enums.GradeStatus
    createdAt: Date
    updatedAt: Date
    approvedAt: Date | null
    answerId: string
    teacherId: string
    approvedById: string | null
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    maxScore?: boolean
    feedback?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    approvedById?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    maxScore?: boolean
    feedback?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    approvedById?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    maxScore?: boolean
    feedback?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    approvedById?: boolean
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectScalar = {
    id?: boolean
    score?: boolean
    maxScore?: boolean
    feedback?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedAt?: boolean
    answerId?: boolean
    teacherId?: boolean
    approvedById?: boolean
  }

  export type GradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "maxScore" | "feedback" | "status" | "createdAt" | "updatedAt" | "approvedAt" | "answerId" | "teacherId" | "approvedById", ExtArgs["result"]["grade"]>
  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }
  export type GradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }
  export type GradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Grade$approvedByArgs<ExtArgs>
  }

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      answer: Prisma.$AnswerPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      maxScore: number
      feedback: string | null
      status: $Enums.GradeStatus
      createdAt: Date
      updatedAt: Date
      approvedAt: Date | null
      answerId: string
      teacherId: string
      approvedById: string | null
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {GradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades and returns the data updated in the database.
     * @param {GradeUpdateManyAndReturnArgs} args - Arguments to update many Grades.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GradeUpdateManyAndReturnArgs>(args: SelectSubset<T, GradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    approvedBy<T extends Grade$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Grade$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grade model
   */ 
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'String'>
    readonly score: FieldRef<"Grade", 'Int'>
    readonly maxScore: FieldRef<"Grade", 'Int'>
    readonly feedback: FieldRef<"Grade", 'String'>
    readonly status: FieldRef<"Grade", 'GradeStatus'>
    readonly createdAt: FieldRef<"Grade", 'DateTime'>
    readonly updatedAt: FieldRef<"Grade", 'DateTime'>
    readonly approvedAt: FieldRef<"Grade", 'DateTime'>
    readonly answerId: FieldRef<"Grade", 'String'>
    readonly teacherId: FieldRef<"Grade", 'String'>
    readonly approvedById: FieldRef<"Grade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade createManyAndReturn
   */
  export type GradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
  }

  /**
   * Grade updateManyAndReturn
   */
  export type GradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
  }

  /**
   * Grade.approvedBy
   */
  export type Grade$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uid: 'uid',
    username: 'username',
    email: 'email',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    twoFactorCode: 'twoFactorCode',
    twoFactorVerified: 'twoFactorVerified',
    twoFactorCodeExpiry: 'twoFactorCodeExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt',
    userId: 'userId',
    workbookId: 'workbookId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const WorkbookScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    tag: 'tag',
    isPrivate: 'isPrivate',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    directorId: 'directorId'
  };

  export type WorkbookScalarFieldEnum = (typeof WorkbookScalarFieldEnum)[keyof typeof WorkbookScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    userId: 'userId',
    workbookId: 'workbookId'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const WorksheetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    order: 'order',
    isLocked: 'isLocked',
    yjsState: 'yjsState',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workbookId: 'workbookId'
  };

  export type WorksheetScalarFieldEnum = (typeof WorksheetScalarFieldEnum)[keyof typeof WorksheetScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    order: 'order',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    worksheetId: 'worksheetId',
    teacherId: 'teacherId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    status: 'status',
    yjsState: 'yjsState',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    questionId: 'questionId',
    studentId: 'studentId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const AnnotationScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    suggestedText: 'suggestedText',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    answerId: 'answerId',
    teacherId: 'teacherId'
  };

  export type AnnotationScalarFieldEnum = (typeof AnnotationScalarFieldEnum)[keyof typeof AnnotationScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    score: 'score',
    maxScore: 'maxScore',
    feedback: 'feedback',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    approvedAt: 'approvedAt',
    answerId: 'answerId',
    teacherId: 'teacherId',
    approvedById: 'approvedById'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuditLogType'
   */
  export type EnumAuditLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditLogType'>
    


  /**
   * Reference to a field of type 'AuditLogType[]'
   */
  export type ListEnumAuditLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditLogType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'AnswerStatus'
   */
  export type EnumAnswerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnswerStatus'>
    


  /**
   * Reference to a field of type 'AnswerStatus[]'
   */
  export type ListEnumAnswerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnswerStatus[]'>
    


  /**
   * Reference to a field of type 'GradeStatus'
   */
  export type EnumGradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeStatus'>
    


  /**
   * Reference to a field of type 'GradeStatus[]'
   */
  export type ListEnumGradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uid?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    twoFactorCode?: StringNullableFilter<"User"> | string | null
    twoFactorVerified?: BoolFilter<"User"> | boolean
    twoFactorCodeExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    workbooks?: WorkbookListRelationFilter
    memberships?: MembershipListRelationFilter
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    annotations?: AnnotationListRelationFilter
    grades?: GradeListRelationFilter
    approvals?: GradeListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorCode?: SortOrderInput | SortOrder
    twoFactorVerified?: SortOrder
    twoFactorCodeExpiry?: SortOrderInput | SortOrder
    workbooks?: WorkbookOrderByRelationAggregateInput
    memberships?: MembershipOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    answers?: AnswerOrderByRelationAggregateInput
    annotations?: AnnotationOrderByRelationAggregateInput
    grades?: GradeOrderByRelationAggregateInput
    approvals?: GradeOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uid?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    twoFactorCode?: StringNullableFilter<"User"> | string | null
    twoFactorVerified?: BoolFilter<"User"> | boolean
    twoFactorCodeExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    workbooks?: WorkbookListRelationFilter
    memberships?: MembershipListRelationFilter
    questions?: QuestionListRelationFilter
    answers?: AnswerListRelationFilter
    annotations?: AnnotationListRelationFilter
    grades?: GradeListRelationFilter
    approvals?: GradeListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "uid" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    uid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorCode?: SortOrderInput | SortOrder
    twoFactorVerified?: SortOrder
    twoFactorCodeExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uid?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    twoFactorCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorVerified?: BoolWithAggregatesFilter<"User"> | boolean
    twoFactorCodeExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    type?: EnumAuditLogTypeFilter<"AuditLog"> | $Enums.AuditLogType
    title?: StringFilter<"AuditLog"> | string
    description?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
    workbookId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workbook?: XOR<WorkbookNullableScalarRelationFilter, WorkbookWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    workbook?: WorkbookOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    type?: EnumAuditLogTypeFilter<"AuditLog"> | $Enums.AuditLogType
    title?: StringFilter<"AuditLog"> | string
    description?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
    workbookId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workbook?: XOR<WorkbookNullableScalarRelationFilter, WorkbookWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    type?: EnumAuditLogTypeWithAggregatesFilter<"AuditLog"> | $Enums.AuditLogType
    title?: StringWithAggregatesFilter<"AuditLog"> | string
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    workbookId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type WorkbookWhereInput = {
    AND?: WorkbookWhereInput | WorkbookWhereInput[]
    OR?: WorkbookWhereInput[]
    NOT?: WorkbookWhereInput | WorkbookWhereInput[]
    id?: StringFilter<"Workbook"> | string
    name?: StringFilter<"Workbook"> | string
    description?: StringNullableFilter<"Workbook"> | string | null
    tag?: StringNullableFilter<"Workbook"> | string | null
    isPrivate?: BoolFilter<"Workbook"> | boolean
    isArchived?: BoolFilter<"Workbook"> | boolean
    createdAt?: DateTimeFilter<"Workbook"> | Date | string
    updatedAt?: DateTimeFilter<"Workbook"> | Date | string
    directorId?: StringFilter<"Workbook"> | string
    director?: XOR<UserScalarRelationFilter, UserWhereInput>
    worksheets?: WorksheetListRelationFilter
    memberships?: MembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type WorkbookOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
    director?: UserOrderByWithRelationInput
    worksheets?: WorksheetOrderByRelationAggregateInput
    memberships?: MembershipOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type WorkbookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkbookWhereInput | WorkbookWhereInput[]
    OR?: WorkbookWhereInput[]
    NOT?: WorkbookWhereInput | WorkbookWhereInput[]
    name?: StringFilter<"Workbook"> | string
    description?: StringNullableFilter<"Workbook"> | string | null
    tag?: StringNullableFilter<"Workbook"> | string | null
    isPrivate?: BoolFilter<"Workbook"> | boolean
    isArchived?: BoolFilter<"Workbook"> | boolean
    createdAt?: DateTimeFilter<"Workbook"> | Date | string
    updatedAt?: DateTimeFilter<"Workbook"> | Date | string
    directorId?: StringFilter<"Workbook"> | string
    director?: XOR<UserScalarRelationFilter, UserWhereInput>
    worksheets?: WorksheetListRelationFilter
    memberships?: MembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id">

  export type WorkbookOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
    _count?: WorkbookCountOrderByAggregateInput
    _max?: WorkbookMaxOrderByAggregateInput
    _min?: WorkbookMinOrderByAggregateInput
  }

  export type WorkbookScalarWhereWithAggregatesInput = {
    AND?: WorkbookScalarWhereWithAggregatesInput | WorkbookScalarWhereWithAggregatesInput[]
    OR?: WorkbookScalarWhereWithAggregatesInput[]
    NOT?: WorkbookScalarWhereWithAggregatesInput | WorkbookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workbook"> | string
    name?: StringWithAggregatesFilter<"Workbook"> | string
    description?: StringNullableWithAggregatesFilter<"Workbook"> | string | null
    tag?: StringNullableWithAggregatesFilter<"Workbook"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"Workbook"> | boolean
    isArchived?: BoolWithAggregatesFilter<"Workbook"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workbook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workbook"> | Date | string
    directorId?: StringWithAggregatesFilter<"Workbook"> | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    role?: EnumRoleFilter<"Membership"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
    userId?: StringFilter<"Membership"> | string
    workbookId?: StringFilter<"Membership"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workbook?: XOR<WorkbookScalarRelationFilter, WorkbookWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
    user?: UserOrderByWithRelationInput
    workbook?: WorkbookOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_workbookId?: MembershipUserIdWorkbookIdCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    role?: EnumRoleFilter<"Membership"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
    userId?: StringFilter<"Membership"> | string
    workbookId?: StringFilter<"Membership"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workbook?: XOR<WorkbookScalarRelationFilter, WorkbookWhereInput>
  }, "id" | "userId_workbookId">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    role?: EnumRoleWithAggregatesFilter<"Membership"> | $Enums.Role
    joinedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    userId?: StringWithAggregatesFilter<"Membership"> | string
    workbookId?: StringWithAggregatesFilter<"Membership"> | string
  }

  export type WorksheetWhereInput = {
    AND?: WorksheetWhereInput | WorksheetWhereInput[]
    OR?: WorksheetWhereInput[]
    NOT?: WorksheetWhereInput | WorksheetWhereInput[]
    id?: StringFilter<"Worksheet"> | string
    title?: StringFilter<"Worksheet"> | string
    description?: StringFilter<"Worksheet"> | string
    order?: IntFilter<"Worksheet"> | number
    isLocked?: BoolFilter<"Worksheet"> | boolean
    yjsState?: BytesNullableFilter<"Worksheet"> | Uint8Array | null
    createdAt?: DateTimeFilter<"Worksheet"> | Date | string
    updatedAt?: DateTimeFilter<"Worksheet"> | Date | string
    workbookId?: StringFilter<"Worksheet"> | string
    workbook?: XOR<WorkbookScalarRelationFilter, WorkbookWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type WorksheetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isLocked?: SortOrder
    yjsState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workbookId?: SortOrder
    workbook?: WorkbookOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type WorksheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorksheetWhereInput | WorksheetWhereInput[]
    OR?: WorksheetWhereInput[]
    NOT?: WorksheetWhereInput | WorksheetWhereInput[]
    title?: StringFilter<"Worksheet"> | string
    description?: StringFilter<"Worksheet"> | string
    order?: IntFilter<"Worksheet"> | number
    isLocked?: BoolFilter<"Worksheet"> | boolean
    yjsState?: BytesNullableFilter<"Worksheet"> | Uint8Array | null
    createdAt?: DateTimeFilter<"Worksheet"> | Date | string
    updatedAt?: DateTimeFilter<"Worksheet"> | Date | string
    workbookId?: StringFilter<"Worksheet"> | string
    workbook?: XOR<WorkbookScalarRelationFilter, WorkbookWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type WorksheetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isLocked?: SortOrder
    yjsState?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workbookId?: SortOrder
    _count?: WorksheetCountOrderByAggregateInput
    _avg?: WorksheetAvgOrderByAggregateInput
    _max?: WorksheetMaxOrderByAggregateInput
    _min?: WorksheetMinOrderByAggregateInput
    _sum?: WorksheetSumOrderByAggregateInput
  }

  export type WorksheetScalarWhereWithAggregatesInput = {
    AND?: WorksheetScalarWhereWithAggregatesInput | WorksheetScalarWhereWithAggregatesInput[]
    OR?: WorksheetScalarWhereWithAggregatesInput[]
    NOT?: WorksheetScalarWhereWithAggregatesInput | WorksheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worksheet"> | string
    title?: StringWithAggregatesFilter<"Worksheet"> | string
    description?: StringWithAggregatesFilter<"Worksheet"> | string
    order?: IntWithAggregatesFilter<"Worksheet"> | number
    isLocked?: BoolWithAggregatesFilter<"Worksheet"> | boolean
    yjsState?: BytesNullableWithAggregatesFilter<"Worksheet"> | Uint8Array | null
    createdAt?: DateTimeWithAggregatesFilter<"Worksheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Worksheet"> | Date | string
    workbookId?: StringWithAggregatesFilter<"Worksheet"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isRequired?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    worksheetId?: StringFilter<"Question"> | string
    teacherId?: StringFilter<"Question"> | string
    worksheet?: XOR<WorksheetScalarRelationFilter, WorksheetWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    worksheetId?: SortOrder
    teacherId?: SortOrder
    worksheet?: WorksheetOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isRequired?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    worksheetId?: StringFilter<"Question"> | string
    teacherId?: StringFilter<"Question"> | string
    worksheet?: XOR<WorksheetScalarRelationFilter, WorksheetWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    worksheetId?: SortOrder
    teacherId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    isRequired?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    worksheetId?: StringWithAggregatesFilter<"Question"> | string
    teacherId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    status?: EnumAnswerStatusFilter<"Answer"> | $Enums.AnswerStatus
    yjsState?: BytesNullableFilter<"Answer"> | Uint8Array | null
    submittedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    studentId?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    annotations?: AnnotationListRelationFilter
    grade?: XOR<GradeNullableScalarRelationFilter, GradeWhereInput> | null
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    status?: SortOrder
    yjsState?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    annotations?: AnnotationOrderByRelationAggregateInput
    grade?: GradeOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_studentId?: AnswerQuestionIdStudentIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    text?: StringFilter<"Answer"> | string
    status?: EnumAnswerStatusFilter<"Answer"> | $Enums.AnswerStatus
    yjsState?: BytesNullableFilter<"Answer"> | Uint8Array | null
    submittedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    studentId?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    annotations?: AnnotationListRelationFilter
    grade?: XOR<GradeNullableScalarRelationFilter, GradeWhereInput> | null
  }, "id" | "questionId_studentId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    status?: SortOrder
    yjsState?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    text?: StringWithAggregatesFilter<"Answer"> | string
    status?: EnumAnswerStatusWithAggregatesFilter<"Answer"> | $Enums.AnswerStatus
    yjsState?: BytesNullableWithAggregatesFilter<"Answer"> | Uint8Array | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    studentId?: StringWithAggregatesFilter<"Answer"> | string
  }

  export type AnnotationWhereInput = {
    AND?: AnnotationWhereInput | AnnotationWhereInput[]
    OR?: AnnotationWhereInput[]
    NOT?: AnnotationWhereInput | AnnotationWhereInput[]
    id?: StringFilter<"Annotation"> | string
    comment?: StringFilter<"Annotation"> | string
    suggestedText?: StringNullableFilter<"Annotation"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Annotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
    answerId?: StringFilter<"Annotation"> | string
    teacherId?: StringFilter<"Annotation"> | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnotationOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    suggestedText?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    answer?: AnswerOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type AnnotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnotationWhereInput | AnnotationWhereInput[]
    OR?: AnnotationWhereInput[]
    NOT?: AnnotationWhereInput | AnnotationWhereInput[]
    comment?: StringFilter<"Annotation"> | string
    suggestedText?: StringNullableFilter<"Annotation"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Annotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
    answerId?: StringFilter<"Annotation"> | string
    teacherId?: StringFilter<"Annotation"> | string
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnotationOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    suggestedText?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    _count?: AnnotationCountOrderByAggregateInput
    _max?: AnnotationMaxOrderByAggregateInput
    _min?: AnnotationMinOrderByAggregateInput
  }

  export type AnnotationScalarWhereWithAggregatesInput = {
    AND?: AnnotationScalarWhereWithAggregatesInput | AnnotationScalarWhereWithAggregatesInput[]
    OR?: AnnotationScalarWhereWithAggregatesInput[]
    NOT?: AnnotationScalarWhereWithAggregatesInput | AnnotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Annotation"> | string
    comment?: StringWithAggregatesFilter<"Annotation"> | string
    suggestedText?: StringNullableWithAggregatesFilter<"Annotation"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Annotation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Annotation"> | Date | string
    answerId?: StringWithAggregatesFilter<"Annotation"> | string
    teacherId?: StringWithAggregatesFilter<"Annotation"> | string
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: StringFilter<"Grade"> | string
    score?: IntFilter<"Grade"> | number
    maxScore?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    status?: EnumGradeStatusFilter<"Grade"> | $Enums.GradeStatus
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
    answerId?: StringFilter<"Grade"> | string
    teacherId?: StringFilter<"Grade"> | string
    approvedById?: StringNullableFilter<"Grade"> | string | null
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    feedback?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    answer?: AnswerOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    answerId?: string
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    score?: IntFilter<"Grade"> | number
    maxScore?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    status?: EnumGradeStatusFilter<"Grade"> | $Enums.GradeStatus
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
    teacherId?: StringFilter<"Grade"> | string
    approvedById?: StringNullableFilter<"Grade"> | string | null
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "answerId">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    feedback?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grade"> | string
    score?: IntWithAggregatesFilter<"Grade"> | number
    maxScore?: IntWithAggregatesFilter<"Grade"> | number
    feedback?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    status?: EnumGradeStatusWithAggregatesFilter<"Grade"> | $Enums.GradeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Grade"> | Date | string | null
    answerId?: StringWithAggregatesFilter<"Grade"> | string
    teacherId?: StringWithAggregatesFilter<"Grade"> | string
    approvedById?: StringNullableWithAggregatesFilter<"Grade"> | string | null
  }

  export type UserCreateInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
    workbook?: WorkbookCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    workbookId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
    workbook?: WorkbookUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workbookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
    workbookId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workbookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkbookCreateInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    director: UserCreateNestedOneWithoutWorkbooksInput
    worksheets?: WorksheetCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId: string
    worksheets?: WorksheetUncheckedCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    director?: UserUpdateOneRequiredWithoutWorkbooksNestedInput
    worksheets?: WorksheetUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: StringFieldUpdateOperationsInput | string
    worksheets?: WorksheetUncheckedUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId: string
  }

  export type WorkbookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkbookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    workbook: WorkbookCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    userId: string
    workbookId: string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    workbook?: WorkbookUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    userId: string
    workbookId: string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type WorksheetCreateInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workbook: WorkbookCreateNestedOneWithoutWorksheetsInput
    questions?: QuestionCreateNestedManyWithoutWorksheetInput
  }

  export type WorksheetUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workbookId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutWorksheetInput
  }

  export type WorksheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbook?: WorkbookUpdateOneRequiredWithoutWorksheetsNestedInput
    questions?: QuestionUpdateManyWithoutWorksheetNestedInput
  }

  export type WorksheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutWorksheetNestedInput
  }

  export type WorksheetCreateManyInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workbookId: string
  }

  export type WorksheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheet: WorksheetCreateNestedOneWithoutQuestionsInput
    teacher: UserCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheetId: string
    teacherId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheet?: WorksheetUpdateOneRequiredWithoutQuestionsNestedInput
    teacher?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheetId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheetId: string
    teacherId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheetId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    student: UserCreateNestedOneWithoutAnswersInput
    annotations?: AnnotationCreateNestedManyWithoutAnswerInput
    grade?: GradeCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    studentId: string
    annotations?: AnnotationUncheckedCreateNestedManyWithoutAnswerInput
    grade?: GradeUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    student?: UserUpdateOneRequiredWithoutAnswersNestedInput
    annotations?: AnnotationUpdateManyWithoutAnswerNestedInput
    grade?: GradeUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    annotations?: AnnotationUncheckedUpdateManyWithoutAnswerNestedInput
    grade?: GradeUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    studentId: string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationCreateInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: AnswerCreateNestedOneWithoutAnnotationsInput
    teacher: UserCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: string
    teacherId: string
  }

  export type AnnotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutAnnotationsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationCreateManyInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: string
    teacherId: string
  }

  export type AnnotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeCreateInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answer: AnswerCreateNestedOneWithoutGradeInput
    teacher: UserCreateNestedOneWithoutGradesInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
  }

  export type GradeUncheckedCreateInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    teacherId: string
    approvedById?: string | null
  }

  export type GradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneRequiredWithoutGradeNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradesNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GradeCreateManyInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    teacherId: string
    approvedById?: string | null
  }

  export type GradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WorkbookListRelationFilter = {
    every?: WorkbookWhereInput
    some?: WorkbookWhereInput
    none?: WorkbookWhereInput
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnnotationListRelationFilter = {
    every?: AnnotationWhereInput
    some?: AnnotationWhereInput
    none?: AnnotationWhereInput
  }

  export type GradeListRelationFilter = {
    every?: GradeWhereInput
    some?: GradeWhereInput
    none?: GradeWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkbookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnotationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorCodeExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorCodeExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uid?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorCode?: SortOrder
    twoFactorVerified?: SortOrder
    twoFactorCodeExpiry?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAuditLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditLogType | EnumAuditLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditLogTypeFilter<$PrismaModel> | $Enums.AuditLogType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkbookNullableScalarRelationFilter = {
    is?: WorkbookWhereInput | null
    isNot?: WorkbookWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type EnumAuditLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditLogType | EnumAuditLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditLogTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditLogTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WorksheetListRelationFilter = {
    every?: WorksheetWhereInput
    some?: WorksheetWhereInput
    none?: WorksheetWhereInput
  }

  export type WorksheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkbookCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    isPrivate?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type WorkbookMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    isPrivate?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type WorkbookMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    isPrivate?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type WorkbookScalarRelationFilter = {
    is?: WorkbookWhereInput
    isNot?: WorkbookWhereInput
  }

  export type MembershipUserIdWorkbookIdCompoundUniqueInput = {
    userId: string
    workbookId: string
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    workbookId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type WorksheetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isLocked?: SortOrder
    yjsState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workbookId?: SortOrder
  }

  export type WorksheetAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type WorksheetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isLocked?: SortOrder
    yjsState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workbookId?: SortOrder
  }

  export type WorksheetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isLocked?: SortOrder
    yjsState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workbookId?: SortOrder
  }

  export type WorksheetSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type WorksheetScalarRelationFilter = {
    is?: WorksheetWhereInput
    isNot?: WorksheetWhereInput
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    worksheetId?: SortOrder
    teacherId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    worksheetId?: SortOrder
    teacherId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    worksheetId?: SortOrder
    teacherId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumAnswerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnswerStatus | EnumAnswerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerStatusFilter<$PrismaModel> | $Enums.AnswerStatus
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type GradeNullableScalarRelationFilter = {
    is?: GradeWhereInput | null
    isNot?: GradeWhereInput | null
  }

  export type AnswerQuestionIdStudentIdCompoundUniqueInput = {
    questionId: string
    studentId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    status?: SortOrder
    yjsState?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    status?: SortOrder
    yjsState?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    status?: SortOrder
    yjsState?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
  }

  export type EnumAnswerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnswerStatus | EnumAnswerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnswerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnswerStatusFilter<$PrismaModel>
    _max?: NestedEnumAnswerStatusFilter<$PrismaModel>
  }

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type AnnotationCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    suggestedText?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
  }

  export type AnnotationMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    suggestedText?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
  }

  export type AnnotationMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    suggestedText?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
  }

  export type EnumGradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusFilter<$PrismaModel> | $Enums.GradeStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    feedback?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    approvedById?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    feedback?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    approvedById?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    feedback?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedAt?: SortOrder
    answerId?: SortOrder
    teacherId?: SortOrder
    approvedById?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
  }

  export type EnumGradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeStatusFilter<$PrismaModel>
    _max?: NestedEnumGradeStatusFilter<$PrismaModel>
  }

  export type WorkbookCreateNestedManyWithoutDirectorInput = {
    create?: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput> | WorkbookCreateWithoutDirectorInput[] | WorkbookUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: WorkbookCreateOrConnectWithoutDirectorInput | WorkbookCreateOrConnectWithoutDirectorInput[]
    createMany?: WorkbookCreateManyDirectorInputEnvelope
    connect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput> | QuestionCreateWithoutTeacherInput[] | QuestionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTeacherInput | QuestionCreateOrConnectWithoutTeacherInput[]
    createMany?: QuestionCreateManyTeacherInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerCreateNestedManyWithoutStudentInput = {
    create?: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput> | AnswerCreateWithoutStudentInput[] | AnswerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutStudentInput | AnswerCreateOrConnectWithoutStudentInput[]
    createMany?: AnswerCreateManyStudentInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnnotationCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput> | AnnotationCreateWithoutTeacherInput[] | AnnotationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutTeacherInput | AnnotationCreateOrConnectWithoutTeacherInput[]
    createMany?: AnnotationCreateManyTeacherInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput> | GradeCreateWithoutApprovedByInput[] | GradeUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutApprovedByInput | GradeCreateOrConnectWithoutApprovedByInput[]
    createMany?: GradeCreateManyApprovedByInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WorkbookUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput> | WorkbookCreateWithoutDirectorInput[] | WorkbookUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: WorkbookCreateOrConnectWithoutDirectorInput | WorkbookCreateOrConnectWithoutDirectorInput[]
    createMany?: WorkbookCreateManyDirectorInputEnvelope
    connect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput> | QuestionCreateWithoutTeacherInput[] | QuestionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTeacherInput | QuestionCreateOrConnectWithoutTeacherInput[]
    createMany?: QuestionCreateManyTeacherInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput> | AnswerCreateWithoutStudentInput[] | AnswerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutStudentInput | AnswerCreateOrConnectWithoutStudentInput[]
    createMany?: AnswerCreateManyStudentInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnnotationUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput> | AnnotationCreateWithoutTeacherInput[] | AnnotationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutTeacherInput | AnnotationCreateOrConnectWithoutTeacherInput[]
    createMany?: AnnotationCreateManyTeacherInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput> | GradeCreateWithoutApprovedByInput[] | GradeUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutApprovedByInput | GradeCreateOrConnectWithoutApprovedByInput[]
    createMany?: GradeCreateManyApprovedByInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkbookUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput> | WorkbookCreateWithoutDirectorInput[] | WorkbookUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: WorkbookCreateOrConnectWithoutDirectorInput | WorkbookCreateOrConnectWithoutDirectorInput[]
    upsert?: WorkbookUpsertWithWhereUniqueWithoutDirectorInput | WorkbookUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: WorkbookCreateManyDirectorInputEnvelope
    set?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    disconnect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    delete?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    connect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    update?: WorkbookUpdateWithWhereUniqueWithoutDirectorInput | WorkbookUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: WorkbookUpdateManyWithWhereWithoutDirectorInput | WorkbookUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: WorkbookScalarWhereInput | WorkbookScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput> | QuestionCreateWithoutTeacherInput[] | QuestionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTeacherInput | QuestionCreateOrConnectWithoutTeacherInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTeacherInput | QuestionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuestionCreateManyTeacherInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTeacherInput | QuestionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTeacherInput | QuestionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput> | AnswerCreateWithoutStudentInput[] | AnswerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutStudentInput | AnswerCreateOrConnectWithoutStudentInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutStudentInput | AnswerUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AnswerCreateManyStudentInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutStudentInput | AnswerUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutStudentInput | AnswerUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnnotationUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput> | AnnotationCreateWithoutTeacherInput[] | AnnotationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutTeacherInput | AnnotationCreateOrConnectWithoutTeacherInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutTeacherInput | AnnotationUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AnnotationCreateManyTeacherInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutTeacherInput | AnnotationUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutTeacherInput | AnnotationUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutTeacherInput | GradeUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutTeacherInput | GradeUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutTeacherInput | GradeUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput> | GradeCreateWithoutApprovedByInput[] | GradeUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutApprovedByInput | GradeCreateOrConnectWithoutApprovedByInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutApprovedByInput | GradeUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: GradeCreateManyApprovedByInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutApprovedByInput | GradeUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutApprovedByInput | GradeUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WorkbookUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput> | WorkbookCreateWithoutDirectorInput[] | WorkbookUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: WorkbookCreateOrConnectWithoutDirectorInput | WorkbookCreateOrConnectWithoutDirectorInput[]
    upsert?: WorkbookUpsertWithWhereUniqueWithoutDirectorInput | WorkbookUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: WorkbookCreateManyDirectorInputEnvelope
    set?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    disconnect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    delete?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    connect?: WorkbookWhereUniqueInput | WorkbookWhereUniqueInput[]
    update?: WorkbookUpdateWithWhereUniqueWithoutDirectorInput | WorkbookUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: WorkbookUpdateManyWithWhereWithoutDirectorInput | WorkbookUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: WorkbookScalarWhereInput | WorkbookScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput> | QuestionCreateWithoutTeacherInput[] | QuestionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTeacherInput | QuestionCreateOrConnectWithoutTeacherInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTeacherInput | QuestionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: QuestionCreateManyTeacherInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTeacherInput | QuestionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTeacherInput | QuestionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput> | AnswerCreateWithoutStudentInput[] | AnswerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutStudentInput | AnswerCreateOrConnectWithoutStudentInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutStudentInput | AnswerUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AnswerCreateManyStudentInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutStudentInput | AnswerUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutStudentInput | AnswerUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnnotationUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput> | AnnotationCreateWithoutTeacherInput[] | AnnotationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutTeacherInput | AnnotationCreateOrConnectWithoutTeacherInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutTeacherInput | AnnotationUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AnnotationCreateManyTeacherInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutTeacherInput | AnnotationUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutTeacherInput | AnnotationUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutTeacherInput | GradeUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutTeacherInput | GradeUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutTeacherInput | GradeUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput> | GradeCreateWithoutApprovedByInput[] | GradeUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutApprovedByInput | GradeCreateOrConnectWithoutApprovedByInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutApprovedByInput | GradeUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: GradeCreateManyApprovedByInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutApprovedByInput | GradeUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutApprovedByInput | GradeUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkbookCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<WorkbookCreateWithoutAuditLogsInput, WorkbookUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutAuditLogsInput
    connect?: WorkbookWhereUniqueInput
  }

  export type EnumAuditLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditLogType
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type WorkbookUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<WorkbookCreateWithoutAuditLogsInput, WorkbookUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutAuditLogsInput
    upsert?: WorkbookUpsertWithoutAuditLogsInput
    disconnect?: WorkbookWhereInput | boolean
    delete?: WorkbookWhereInput | boolean
    connect?: WorkbookWhereUniqueInput
    update?: XOR<XOR<WorkbookUpdateToOneWithWhereWithoutAuditLogsInput, WorkbookUpdateWithoutAuditLogsInput>, WorkbookUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutWorkbooksInput = {
    create?: XOR<UserCreateWithoutWorkbooksInput, UserUncheckedCreateWithoutWorkbooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkbooksInput
    connect?: UserWhereUniqueInput
  }

  export type WorksheetCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput> | WorksheetCreateWithoutWorkbookInput[] | WorksheetUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: WorksheetCreateOrConnectWithoutWorkbookInput | WorksheetCreateOrConnectWithoutWorkbookInput[]
    createMany?: WorksheetCreateManyWorkbookInputEnvelope
    connect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput> | MembershipCreateWithoutWorkbookInput[] | MembershipUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutWorkbookInput | MembershipCreateOrConnectWithoutWorkbookInput[]
    createMany?: MembershipCreateManyWorkbookInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput> | AuditLogCreateWithoutWorkbookInput[] | AuditLogUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkbookInput | AuditLogCreateOrConnectWithoutWorkbookInput[]
    createMany?: AuditLogCreateManyWorkbookInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WorksheetUncheckedCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput> | WorksheetCreateWithoutWorkbookInput[] | WorksheetUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: WorksheetCreateOrConnectWithoutWorkbookInput | WorksheetCreateOrConnectWithoutWorkbookInput[]
    createMany?: WorksheetCreateManyWorkbookInputEnvelope
    connect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput> | MembershipCreateWithoutWorkbookInput[] | MembershipUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutWorkbookInput | MembershipCreateOrConnectWithoutWorkbookInput[]
    createMany?: MembershipCreateManyWorkbookInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutWorkbookInput = {
    create?: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput> | AuditLogCreateWithoutWorkbookInput[] | AuditLogUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkbookInput | AuditLogCreateOrConnectWithoutWorkbookInput[]
    createMany?: AuditLogCreateManyWorkbookInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkbooksNestedInput = {
    create?: XOR<UserCreateWithoutWorkbooksInput, UserUncheckedCreateWithoutWorkbooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkbooksInput
    upsert?: UserUpsertWithoutWorkbooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkbooksInput, UserUpdateWithoutWorkbooksInput>, UserUncheckedUpdateWithoutWorkbooksInput>
  }

  export type WorksheetUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput> | WorksheetCreateWithoutWorkbookInput[] | WorksheetUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: WorksheetCreateOrConnectWithoutWorkbookInput | WorksheetCreateOrConnectWithoutWorkbookInput[]
    upsert?: WorksheetUpsertWithWhereUniqueWithoutWorkbookInput | WorksheetUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: WorksheetCreateManyWorkbookInputEnvelope
    set?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    disconnect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    delete?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    connect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    update?: WorksheetUpdateWithWhereUniqueWithoutWorkbookInput | WorksheetUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: WorksheetUpdateManyWithWhereWithoutWorkbookInput | WorksheetUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: WorksheetScalarWhereInput | WorksheetScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput> | MembershipCreateWithoutWorkbookInput[] | MembershipUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutWorkbookInput | MembershipCreateOrConnectWithoutWorkbookInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutWorkbookInput | MembershipUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: MembershipCreateManyWorkbookInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutWorkbookInput | MembershipUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutWorkbookInput | MembershipUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput> | AuditLogCreateWithoutWorkbookInput[] | AuditLogUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkbookInput | AuditLogCreateOrConnectWithoutWorkbookInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkbookInput | AuditLogUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: AuditLogCreateManyWorkbookInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkbookInput | AuditLogUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkbookInput | AuditLogUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WorksheetUncheckedUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput> | WorksheetCreateWithoutWorkbookInput[] | WorksheetUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: WorksheetCreateOrConnectWithoutWorkbookInput | WorksheetCreateOrConnectWithoutWorkbookInput[]
    upsert?: WorksheetUpsertWithWhereUniqueWithoutWorkbookInput | WorksheetUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: WorksheetCreateManyWorkbookInputEnvelope
    set?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    disconnect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    delete?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    connect?: WorksheetWhereUniqueInput | WorksheetWhereUniqueInput[]
    update?: WorksheetUpdateWithWhereUniqueWithoutWorkbookInput | WorksheetUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: WorksheetUpdateManyWithWhereWithoutWorkbookInput | WorksheetUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: WorksheetScalarWhereInput | WorksheetScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput> | MembershipCreateWithoutWorkbookInput[] | MembershipUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutWorkbookInput | MembershipCreateOrConnectWithoutWorkbookInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutWorkbookInput | MembershipUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: MembershipCreateManyWorkbookInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutWorkbookInput | MembershipUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutWorkbookInput | MembershipUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkbookNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput> | AuditLogCreateWithoutWorkbookInput[] | AuditLogUncheckedCreateWithoutWorkbookInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkbookInput | AuditLogCreateOrConnectWithoutWorkbookInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkbookInput | AuditLogUpsertWithWhereUniqueWithoutWorkbookInput[]
    createMany?: AuditLogCreateManyWorkbookInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkbookInput | AuditLogUpdateWithWhereUniqueWithoutWorkbookInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkbookInput | AuditLogUpdateManyWithWhereWithoutWorkbookInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkbookCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<WorkbookCreateWithoutMembershipsInput, WorkbookUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutMembershipsInput
    connect?: WorkbookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkbookUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<WorkbookCreateWithoutMembershipsInput, WorkbookUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutMembershipsInput
    upsert?: WorkbookUpsertWithoutMembershipsInput
    connect?: WorkbookWhereUniqueInput
    update?: XOR<XOR<WorkbookUpdateToOneWithWhereWithoutMembershipsInput, WorkbookUpdateWithoutMembershipsInput>, WorkbookUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkbookCreateNestedOneWithoutWorksheetsInput = {
    create?: XOR<WorkbookCreateWithoutWorksheetsInput, WorkbookUncheckedCreateWithoutWorksheetsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutWorksheetsInput
    connect?: WorkbookWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutWorksheetInput = {
    create?: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput> | QuestionCreateWithoutWorksheetInput[] | QuestionUncheckedCreateWithoutWorksheetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutWorksheetInput | QuestionCreateOrConnectWithoutWorksheetInput[]
    createMany?: QuestionCreateManyWorksheetInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutWorksheetInput = {
    create?: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput> | QuestionCreateWithoutWorksheetInput[] | QuestionUncheckedCreateWithoutWorksheetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutWorksheetInput | QuestionCreateOrConnectWithoutWorksheetInput[]
    createMany?: QuestionCreateManyWorksheetInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type WorkbookUpdateOneRequiredWithoutWorksheetsNestedInput = {
    create?: XOR<WorkbookCreateWithoutWorksheetsInput, WorkbookUncheckedCreateWithoutWorksheetsInput>
    connectOrCreate?: WorkbookCreateOrConnectWithoutWorksheetsInput
    upsert?: WorkbookUpsertWithoutWorksheetsInput
    connect?: WorkbookWhereUniqueInput
    update?: XOR<XOR<WorkbookUpdateToOneWithWhereWithoutWorksheetsInput, WorkbookUpdateWithoutWorksheetsInput>, WorkbookUncheckedUpdateWithoutWorksheetsInput>
  }

  export type QuestionUpdateManyWithoutWorksheetNestedInput = {
    create?: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput> | QuestionCreateWithoutWorksheetInput[] | QuestionUncheckedCreateWithoutWorksheetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutWorksheetInput | QuestionCreateOrConnectWithoutWorksheetInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutWorksheetInput | QuestionUpsertWithWhereUniqueWithoutWorksheetInput[]
    createMany?: QuestionCreateManyWorksheetInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutWorksheetInput | QuestionUpdateWithWhereUniqueWithoutWorksheetInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutWorksheetInput | QuestionUpdateManyWithWhereWithoutWorksheetInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutWorksheetNestedInput = {
    create?: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput> | QuestionCreateWithoutWorksheetInput[] | QuestionUncheckedCreateWithoutWorksheetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutWorksheetInput | QuestionCreateOrConnectWithoutWorksheetInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutWorksheetInput | QuestionUpsertWithWhereUniqueWithoutWorksheetInput[]
    createMany?: QuestionCreateManyWorksheetInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutWorksheetInput | QuestionUpdateWithWhereUniqueWithoutWorksheetInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutWorksheetInput | QuestionUpdateManyWithWhereWithoutWorksheetInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type WorksheetCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<WorksheetCreateWithoutQuestionsInput, WorksheetUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: WorksheetCreateOrConnectWithoutQuestionsInput
    connect?: WorksheetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type WorksheetUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<WorksheetCreateWithoutQuestionsInput, WorksheetUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: WorksheetCreateOrConnectWithoutQuestionsInput
    upsert?: WorksheetUpsertWithoutQuestionsInput
    connect?: WorksheetWhereUniqueInput
    update?: XOR<XOR<WorksheetUpdateToOneWithWhereWithoutQuestionsInput, WorksheetUpdateWithoutQuestionsInput>, WorksheetUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type AnnotationCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput> | AnnotationCreateWithoutAnswerInput[] | AnnotationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutAnswerInput | AnnotationCreateOrConnectWithoutAnswerInput[]
    createMany?: AnnotationCreateManyAnswerInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type GradeCreateNestedOneWithoutAnswerInput = {
    create?: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: GradeCreateOrConnectWithoutAnswerInput
    connect?: GradeWhereUniqueInput
  }

  export type AnnotationUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput> | AnnotationCreateWithoutAnswerInput[] | AnnotationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutAnswerInput | AnnotationCreateOrConnectWithoutAnswerInput[]
    createMany?: AnnotationCreateManyAnswerInputEnvelope
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: GradeCreateOrConnectWithoutAnswerInput
    connect?: GradeWhereUniqueInput
  }

  export type EnumAnswerStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnswerStatus
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type AnnotationUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput> | AnnotationCreateWithoutAnswerInput[] | AnnotationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutAnswerInput | AnnotationCreateOrConnectWithoutAnswerInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutAnswerInput | AnnotationUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnnotationCreateManyAnswerInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutAnswerInput | AnnotationUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutAnswerInput | AnnotationUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type GradeUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: GradeCreateOrConnectWithoutAnswerInput
    upsert?: GradeUpsertWithoutAnswerInput
    disconnect?: GradeWhereInput | boolean
    delete?: GradeWhereInput | boolean
    connect?: GradeWhereUniqueInput
    update?: XOR<XOR<GradeUpdateToOneWithWhereWithoutAnswerInput, GradeUpdateWithoutAnswerInput>, GradeUncheckedUpdateWithoutAnswerInput>
  }

  export type AnnotationUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput> | AnnotationCreateWithoutAnswerInput[] | AnnotationUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: AnnotationCreateOrConnectWithoutAnswerInput | AnnotationCreateOrConnectWithoutAnswerInput[]
    upsert?: AnnotationUpsertWithWhereUniqueWithoutAnswerInput | AnnotationUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: AnnotationCreateManyAnswerInputEnvelope
    set?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    disconnect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    delete?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    connect?: AnnotationWhereUniqueInput | AnnotationWhereUniqueInput[]
    update?: AnnotationUpdateWithWhereUniqueWithoutAnswerInput | AnnotationUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: AnnotationUpdateManyWithWhereWithoutAnswerInput | AnnotationUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
  }

  export type GradeUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: GradeCreateOrConnectWithoutAnswerInput
    upsert?: GradeUpsertWithoutAnswerInput
    disconnect?: GradeWhereInput | boolean
    delete?: GradeWhereInput | boolean
    connect?: GradeWhereUniqueInput
    update?: XOR<XOR<GradeUpdateToOneWithWhereWithoutAnswerInput, GradeUpdateWithoutAnswerInput>, GradeUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<AnswerCreateWithoutAnnotationsInput, AnswerUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnnotationsInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnotationsInput
    connect?: UserWhereUniqueInput
  }

  export type AnswerUpdateOneRequiredWithoutAnnotationsNestedInput = {
    create?: XOR<AnswerCreateWithoutAnnotationsInput, AnswerUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnnotationsInput
    upsert?: AnswerUpsertWithoutAnnotationsInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAnnotationsInput, AnswerUpdateWithoutAnnotationsInput>, AnswerUncheckedUpdateWithoutAnnotationsInput>
  }

  export type UserUpdateOneRequiredWithoutAnnotationsNestedInput = {
    create?: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnotationsInput
    upsert?: UserUpsertWithoutAnnotationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnotationsInput, UserUpdateWithoutAnnotationsInput>, UserUncheckedUpdateWithoutAnnotationsInput>
  }

  export type AnswerCreateNestedOneWithoutGradeInput = {
    create?: XOR<AnswerCreateWithoutGradeInput, AnswerUncheckedCreateWithoutGradeInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutGradeInput
    connect?: AnswerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGradesInput = {
    create?: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGradeStatusFieldUpdateOperationsInput = {
    set?: $Enums.GradeStatus
  }

  export type AnswerUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<AnswerCreateWithoutGradeInput, AnswerUncheckedCreateWithoutGradeInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutGradeInput
    upsert?: AnswerUpsertWithoutGradeInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutGradeInput, AnswerUpdateWithoutGradeInput>, AnswerUncheckedUpdateWithoutGradeInput>
  }

  export type UserUpdateOneRequiredWithoutGradesNestedInput = {
    create?: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesInput
    upsert?: UserUpsertWithoutGradesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGradesInput, UserUpdateWithoutGradesInput>, UserUncheckedUpdateWithoutGradesInput>
  }

  export type UserUpdateOneWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAuditLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditLogType | EnumAuditLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditLogTypeFilter<$PrismaModel> | $Enums.AuditLogType
  }

  export type NestedEnumAuditLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditLogType | EnumAuditLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditLogType[] | ListEnumAuditLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditLogTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditLogTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnswerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnswerStatus | EnumAnswerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerStatusFilter<$PrismaModel> | $Enums.AnswerStatus
  }

  export type NestedEnumAnswerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnswerStatus | EnumAnswerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnswerStatus[] | ListEnumAnswerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnswerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnswerStatusFilter<$PrismaModel>
    _max?: NestedEnumAnswerStatusFilter<$PrismaModel>
  }

  export type NestedEnumGradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusFilter<$PrismaModel> | $Enums.GradeStatus
  }

  export type NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeStatus | EnumGradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradeStatus[] | ListEnumGradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeStatusFilter<$PrismaModel>
    _max?: NestedEnumGradeStatusFilter<$PrismaModel>
  }

  export type WorkbookCreateWithoutDirectorInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheets?: WorksheetCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUncheckedCreateWithoutDirectorInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheets?: WorksheetUncheckedCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookCreateOrConnectWithoutDirectorInput = {
    where: WorkbookWhereUniqueInput
    create: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput>
  }

  export type WorkbookCreateManyDirectorInputEnvelope = {
    data: WorkbookCreateManyDirectorInput | WorkbookCreateManyDirectorInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    workbook: WorkbookCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    workbookId: string
  }

  export type MembershipCreateOrConnectWithoutUserInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateManyUserInputEnvelope = {
    data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutTeacherInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheet: WorksheetCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTeacherInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheetId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTeacherInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput>
  }

  export type QuestionCreateManyTeacherInputEnvelope = {
    data: QuestionCreateManyTeacherInput | QuestionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AnswerCreateWithoutStudentInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    annotations?: AnnotationCreateNestedManyWithoutAnswerInput
    grade?: GradeCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutStudentInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    annotations?: AnnotationUncheckedCreateNestedManyWithoutAnswerInput
    grade?: GradeUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutStudentInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput>
  }

  export type AnswerCreateManyStudentInputEnvelope = {
    data: AnswerCreateManyStudentInput | AnswerCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AnnotationCreateWithoutTeacherInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: AnswerCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateWithoutTeacherInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: string
  }

  export type AnnotationCreateOrConnectWithoutTeacherInput = {
    where: AnnotationWhereUniqueInput
    create: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput>
  }

  export type AnnotationCreateManyTeacherInputEnvelope = {
    data: AnnotationCreateManyTeacherInput | AnnotationCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutTeacherInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answer: AnswerCreateNestedOneWithoutGradeInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
  }

  export type GradeUncheckedCreateWithoutTeacherInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    approvedById?: string | null
  }

  export type GradeCreateOrConnectWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput>
  }

  export type GradeCreateManyTeacherInputEnvelope = {
    data: GradeCreateManyTeacherInput | GradeCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutApprovedByInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answer: AnswerCreateNestedOneWithoutGradeInput
    teacher: UserCreateNestedOneWithoutGradesInput
  }

  export type GradeUncheckedCreateWithoutApprovedByInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    teacherId: string
  }

  export type GradeCreateOrConnectWithoutApprovedByInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput>
  }

  export type GradeCreateManyApprovedByInputEnvelope = {
    data: GradeCreateManyApprovedByInput | GradeCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workbook?: WorkbookCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workbookId?: string | null
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkbookUpsertWithWhereUniqueWithoutDirectorInput = {
    where: WorkbookWhereUniqueInput
    update: XOR<WorkbookUpdateWithoutDirectorInput, WorkbookUncheckedUpdateWithoutDirectorInput>
    create: XOR<WorkbookCreateWithoutDirectorInput, WorkbookUncheckedCreateWithoutDirectorInput>
  }

  export type WorkbookUpdateWithWhereUniqueWithoutDirectorInput = {
    where: WorkbookWhereUniqueInput
    data: XOR<WorkbookUpdateWithoutDirectorInput, WorkbookUncheckedUpdateWithoutDirectorInput>
  }

  export type WorkbookUpdateManyWithWhereWithoutDirectorInput = {
    where: WorkbookScalarWhereInput
    data: XOR<WorkbookUpdateManyMutationInput, WorkbookUncheckedUpdateManyWithoutDirectorInput>
  }

  export type WorkbookScalarWhereInput = {
    AND?: WorkbookScalarWhereInput | WorkbookScalarWhereInput[]
    OR?: WorkbookScalarWhereInput[]
    NOT?: WorkbookScalarWhereInput | WorkbookScalarWhereInput[]
    id?: StringFilter<"Workbook"> | string
    name?: StringFilter<"Workbook"> | string
    description?: StringNullableFilter<"Workbook"> | string | null
    tag?: StringNullableFilter<"Workbook"> | string | null
    isPrivate?: BoolFilter<"Workbook"> | boolean
    isArchived?: BoolFilter<"Workbook"> | boolean
    createdAt?: DateTimeFilter<"Workbook"> | Date | string
    updatedAt?: DateTimeFilter<"Workbook"> | Date | string
    directorId?: StringFilter<"Workbook"> | string
  }

  export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    role?: EnumRoleFilter<"Membership"> | $Enums.Role
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
    userId?: StringFilter<"Membership"> | string
    workbookId?: StringFilter<"Membership"> | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTeacherInput, QuestionUncheckedUpdateWithoutTeacherInput>
    create: XOR<QuestionCreateWithoutTeacherInput, QuestionUncheckedCreateWithoutTeacherInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTeacherInput, QuestionUncheckedUpdateWithoutTeacherInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTeacherInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    isRequired?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    worksheetId?: StringFilter<"Question"> | string
    teacherId?: StringFilter<"Question"> | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutStudentInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutStudentInput, AnswerUncheckedUpdateWithoutStudentInput>
    create: XOR<AnswerCreateWithoutStudentInput, AnswerUncheckedCreateWithoutStudentInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutStudentInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutStudentInput, AnswerUncheckedUpdateWithoutStudentInput>
  }

  export type AnswerUpdateManyWithWhereWithoutStudentInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutStudentInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    status?: EnumAnswerStatusFilter<"Answer"> | $Enums.AnswerStatus
    yjsState?: BytesNullableFilter<"Answer"> | Uint8Array | null
    submittedAt?: DateTimeNullableFilter<"Answer"> | Date | string | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    updatedAt?: DateTimeFilter<"Answer"> | Date | string
    questionId?: StringFilter<"Answer"> | string
    studentId?: StringFilter<"Answer"> | string
  }

  export type AnnotationUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AnnotationWhereUniqueInput
    update: XOR<AnnotationUpdateWithoutTeacherInput, AnnotationUncheckedUpdateWithoutTeacherInput>
    create: XOR<AnnotationCreateWithoutTeacherInput, AnnotationUncheckedCreateWithoutTeacherInput>
  }

  export type AnnotationUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AnnotationWhereUniqueInput
    data: XOR<AnnotationUpdateWithoutTeacherInput, AnnotationUncheckedUpdateWithoutTeacherInput>
  }

  export type AnnotationUpdateManyWithWhereWithoutTeacherInput = {
    where: AnnotationScalarWhereInput
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AnnotationScalarWhereInput = {
    AND?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
    OR?: AnnotationScalarWhereInput[]
    NOT?: AnnotationScalarWhereInput | AnnotationScalarWhereInput[]
    id?: StringFilter<"Annotation"> | string
    comment?: StringFilter<"Annotation"> | string
    suggestedText?: StringNullableFilter<"Annotation"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Annotation"> | Date | string | null
    createdAt?: DateTimeFilter<"Annotation"> | Date | string
    updatedAt?: DateTimeFilter<"Annotation"> | Date | string
    answerId?: StringFilter<"Annotation"> | string
    teacherId?: StringFilter<"Annotation"> | string
  }

  export type GradeUpsertWithWhereUniqueWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutTeacherInput, GradeUncheckedUpdateWithoutTeacherInput>
    create: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutTeacherInput, GradeUncheckedUpdateWithoutTeacherInput>
  }

  export type GradeUpdateManyWithWhereWithoutTeacherInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutTeacherInput>
  }

  export type GradeScalarWhereInput = {
    AND?: GradeScalarWhereInput | GradeScalarWhereInput[]
    OR?: GradeScalarWhereInput[]
    NOT?: GradeScalarWhereInput | GradeScalarWhereInput[]
    id?: StringFilter<"Grade"> | string
    score?: IntFilter<"Grade"> | number
    maxScore?: IntFilter<"Grade"> | number
    feedback?: StringNullableFilter<"Grade"> | string | null
    status?: EnumGradeStatusFilter<"Grade"> | $Enums.GradeStatus
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
    answerId?: StringFilter<"Grade"> | string
    teacherId?: StringFilter<"Grade"> | string
    approvedById?: StringNullableFilter<"Grade"> | string | null
  }

  export type GradeUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutApprovedByInput, GradeUncheckedUpdateWithoutApprovedByInput>
    create: XOR<GradeCreateWithoutApprovedByInput, GradeUncheckedCreateWithoutApprovedByInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutApprovedByInput, GradeUncheckedUpdateWithoutApprovedByInput>
  }

  export type GradeUpdateManyWithWhereWithoutApprovedByInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    type?: EnumAuditLogTypeFilter<"AuditLog"> | $Enums.AuditLogType
    title?: StringFilter<"AuditLog"> | string
    description?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringFilter<"AuditLog"> | string
    workbookId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type UserCreateWithoutAuditLogsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type WorkbookCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    director: UserCreateNestedOneWithoutWorkbooksInput
    worksheets?: WorksheetCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId: string
    worksheets?: WorksheetUncheckedCreateNestedManyWithoutWorkbookInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookCreateOrConnectWithoutAuditLogsInput = {
    where: WorkbookWhereUniqueInput
    create: XOR<WorkbookCreateWithoutAuditLogsInput, WorkbookUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type WorkbookUpsertWithoutAuditLogsInput = {
    update: XOR<WorkbookUpdateWithoutAuditLogsInput, WorkbookUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<WorkbookCreateWithoutAuditLogsInput, WorkbookUncheckedCreateWithoutAuditLogsInput>
    where?: WorkbookWhereInput
  }

  export type WorkbookUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: WorkbookWhereInput
    data: XOR<WorkbookUpdateWithoutAuditLogsInput, WorkbookUncheckedUpdateWithoutAuditLogsInput>
  }

  export type WorkbookUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    director?: UserUpdateOneRequiredWithoutWorkbooksNestedInput
    worksheets?: WorksheetUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: StringFieldUpdateOperationsInput | string
    worksheets?: WorksheetUncheckedUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutWorkbookNestedInput
  }

  export type UserCreateWithoutWorkbooksInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkbooksInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkbooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkbooksInput, UserUncheckedCreateWithoutWorkbooksInput>
  }

  export type WorksheetCreateWithoutWorkbookInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutWorksheetInput
  }

  export type WorksheetUncheckedCreateWithoutWorkbookInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutWorksheetInput
  }

  export type WorksheetCreateOrConnectWithoutWorkbookInput = {
    where: WorksheetWhereUniqueInput
    create: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput>
  }

  export type WorksheetCreateManyWorkbookInputEnvelope = {
    data: WorksheetCreateManyWorkbookInput | WorksheetCreateManyWorkbookInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutWorkbookInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutWorkbookInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    userId: string
  }

  export type MembershipCreateOrConnectWithoutWorkbookInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput>
  }

  export type MembershipCreateManyWorkbookInputEnvelope = {
    data: MembershipCreateManyWorkbookInput | MembershipCreateManyWorkbookInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutWorkbookInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutWorkbookInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type AuditLogCreateOrConnectWithoutWorkbookInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput>
  }

  export type AuditLogCreateManyWorkbookInputEnvelope = {
    data: AuditLogCreateManyWorkbookInput | AuditLogCreateManyWorkbookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkbooksInput = {
    update: XOR<UserUpdateWithoutWorkbooksInput, UserUncheckedUpdateWithoutWorkbooksInput>
    create: XOR<UserCreateWithoutWorkbooksInput, UserUncheckedCreateWithoutWorkbooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkbooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkbooksInput, UserUncheckedUpdateWithoutWorkbooksInput>
  }

  export type UserUpdateWithoutWorkbooksInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkbooksInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorksheetUpsertWithWhereUniqueWithoutWorkbookInput = {
    where: WorksheetWhereUniqueInput
    update: XOR<WorksheetUpdateWithoutWorkbookInput, WorksheetUncheckedUpdateWithoutWorkbookInput>
    create: XOR<WorksheetCreateWithoutWorkbookInput, WorksheetUncheckedCreateWithoutWorkbookInput>
  }

  export type WorksheetUpdateWithWhereUniqueWithoutWorkbookInput = {
    where: WorksheetWhereUniqueInput
    data: XOR<WorksheetUpdateWithoutWorkbookInput, WorksheetUncheckedUpdateWithoutWorkbookInput>
  }

  export type WorksheetUpdateManyWithWhereWithoutWorkbookInput = {
    where: WorksheetScalarWhereInput
    data: XOR<WorksheetUpdateManyMutationInput, WorksheetUncheckedUpdateManyWithoutWorkbookInput>
  }

  export type WorksheetScalarWhereInput = {
    AND?: WorksheetScalarWhereInput | WorksheetScalarWhereInput[]
    OR?: WorksheetScalarWhereInput[]
    NOT?: WorksheetScalarWhereInput | WorksheetScalarWhereInput[]
    id?: StringFilter<"Worksheet"> | string
    title?: StringFilter<"Worksheet"> | string
    description?: StringFilter<"Worksheet"> | string
    order?: IntFilter<"Worksheet"> | number
    isLocked?: BoolFilter<"Worksheet"> | boolean
    yjsState?: BytesNullableFilter<"Worksheet"> | Uint8Array | null
    createdAt?: DateTimeFilter<"Worksheet"> | Date | string
    updatedAt?: DateTimeFilter<"Worksheet"> | Date | string
    workbookId?: StringFilter<"Worksheet"> | string
  }

  export type MembershipUpsertWithWhereUniqueWithoutWorkbookInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutWorkbookInput, MembershipUncheckedUpdateWithoutWorkbookInput>
    create: XOR<MembershipCreateWithoutWorkbookInput, MembershipUncheckedCreateWithoutWorkbookInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutWorkbookInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutWorkbookInput, MembershipUncheckedUpdateWithoutWorkbookInput>
  }

  export type MembershipUpdateManyWithWhereWithoutWorkbookInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutWorkbookInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutWorkbookInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutWorkbookInput, AuditLogUncheckedUpdateWithoutWorkbookInput>
    create: XOR<AuditLogCreateWithoutWorkbookInput, AuditLogUncheckedCreateWithoutWorkbookInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutWorkbookInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutWorkbookInput, AuditLogUncheckedUpdateWithoutWorkbookInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutWorkbookInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutWorkbookInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type WorkbookCreateWithoutMembershipsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    director: UserCreateNestedOneWithoutWorkbooksInput
    worksheets?: WorksheetCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId: string
    worksheets?: WorksheetUncheckedCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookCreateOrConnectWithoutMembershipsInput = {
    where: WorkbookWhereUniqueInput
    create: XOR<WorkbookCreateWithoutMembershipsInput, WorkbookUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkbookUpsertWithoutMembershipsInput = {
    update: XOR<WorkbookUpdateWithoutMembershipsInput, WorkbookUncheckedUpdateWithoutMembershipsInput>
    create: XOR<WorkbookCreateWithoutMembershipsInput, WorkbookUncheckedCreateWithoutMembershipsInput>
    where?: WorkbookWhereInput
  }

  export type WorkbookUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: WorkbookWhereInput
    data: XOR<WorkbookUpdateWithoutMembershipsInput, WorkbookUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkbookUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    director?: UserUpdateOneRequiredWithoutWorkbooksNestedInput
    worksheets?: WorksheetUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: StringFieldUpdateOperationsInput | string
    worksheets?: WorksheetUncheckedUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookCreateWithoutWorksheetsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    director: UserCreateNestedOneWithoutWorkbooksInput
    memberships?: MembershipCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookUncheckedCreateWithoutWorksheetsInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutWorkbookInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkbookInput
  }

  export type WorkbookCreateOrConnectWithoutWorksheetsInput = {
    where: WorkbookWhereUniqueInput
    create: XOR<WorkbookCreateWithoutWorksheetsInput, WorkbookUncheckedCreateWithoutWorksheetsInput>
  }

  export type QuestionCreateWithoutWorksheetInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutWorksheetInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutWorksheetInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput>
  }

  export type QuestionCreateManyWorksheetInputEnvelope = {
    data: QuestionCreateManyWorksheetInput | QuestionCreateManyWorksheetInput[]
    skipDuplicates?: boolean
  }

  export type WorkbookUpsertWithoutWorksheetsInput = {
    update: XOR<WorkbookUpdateWithoutWorksheetsInput, WorkbookUncheckedUpdateWithoutWorksheetsInput>
    create: XOR<WorkbookCreateWithoutWorksheetsInput, WorkbookUncheckedCreateWithoutWorksheetsInput>
    where?: WorkbookWhereInput
  }

  export type WorkbookUpdateToOneWithWhereWithoutWorksheetsInput = {
    where?: WorkbookWhereInput
    data: XOR<WorkbookUpdateWithoutWorksheetsInput, WorkbookUncheckedUpdateWithoutWorksheetsInput>
  }

  export type WorkbookUpdateWithoutWorksheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    director?: UserUpdateOneRequiredWithoutWorkbooksNestedInput
    memberships?: MembershipUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateWithoutWorksheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkbookNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutWorksheetInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutWorksheetInput, QuestionUncheckedUpdateWithoutWorksheetInput>
    create: XOR<QuestionCreateWithoutWorksheetInput, QuestionUncheckedCreateWithoutWorksheetInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutWorksheetInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutWorksheetInput, QuestionUncheckedUpdateWithoutWorksheetInput>
  }

  export type QuestionUpdateManyWithWhereWithoutWorksheetInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutWorksheetInput>
  }

  export type WorksheetCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workbook: WorkbookCreateNestedOneWithoutWorksheetsInput
  }

  export type WorksheetUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workbookId: string
  }

  export type WorksheetCreateOrConnectWithoutQuestionsInput = {
    where: WorksheetWhereUniqueInput
    create: XOR<WorksheetCreateWithoutQuestionsInput, WorksheetUncheckedCreateWithoutQuestionsInput>
  }

  export type UserCreateWithoutQuestionsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutAnswersInput
    annotations?: AnnotationCreateNestedManyWithoutAnswerInput
    grade?: GradeCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    annotations?: AnnotationUncheckedCreateNestedManyWithoutAnswerInput
    grade?: GradeUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type WorksheetUpsertWithoutQuestionsInput = {
    update: XOR<WorksheetUpdateWithoutQuestionsInput, WorksheetUncheckedUpdateWithoutQuestionsInput>
    create: XOR<WorksheetCreateWithoutQuestionsInput, WorksheetUncheckedCreateWithoutQuestionsInput>
    where?: WorksheetWhereInput
  }

  export type WorksheetUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: WorksheetWhereInput
    data: XOR<WorksheetUpdateWithoutQuestionsInput, WorksheetUncheckedUpdateWithoutQuestionsInput>
  }

  export type WorksheetUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbook?: WorkbookUpdateOneRequiredWithoutWorksheetsNestedInput
  }

  export type WorksheetUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheet: WorksheetCreateNestedOneWithoutQuestionsInput
    teacher: UserCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheetId: string
    teacherId: string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserCreateWithoutAnswersInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type AnnotationCreateWithoutAnswerInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationUncheckedCreateWithoutAnswerInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type AnnotationCreateOrConnectWithoutAnswerInput = {
    where: AnnotationWhereUniqueInput
    create: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput>
  }

  export type AnnotationCreateManyAnswerInputEnvelope = {
    data: AnnotationCreateManyAnswerInput | AnnotationCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutAnswerInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    teacher: UserCreateNestedOneWithoutGradesInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
  }

  export type GradeUncheckedCreateWithoutAnswerInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    teacherId: string
    approvedById?: string | null
  }

  export type GradeCreateOrConnectWithoutAnswerInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheet?: WorksheetUpdateOneRequiredWithoutQuestionsNestedInput
    teacher?: UserUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheetId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnotationUpsertWithWhereUniqueWithoutAnswerInput = {
    where: AnnotationWhereUniqueInput
    update: XOR<AnnotationUpdateWithoutAnswerInput, AnnotationUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnnotationCreateWithoutAnswerInput, AnnotationUncheckedCreateWithoutAnswerInput>
  }

  export type AnnotationUpdateWithWhereUniqueWithoutAnswerInput = {
    where: AnnotationWhereUniqueInput
    data: XOR<AnnotationUpdateWithoutAnswerInput, AnnotationUncheckedUpdateWithoutAnswerInput>
  }

  export type AnnotationUpdateManyWithWhereWithoutAnswerInput = {
    where: AnnotationScalarWhereInput
    data: XOR<AnnotationUpdateManyMutationInput, AnnotationUncheckedUpdateManyWithoutAnswerInput>
  }

  export type GradeUpsertWithoutAnswerInput = {
    update: XOR<GradeUpdateWithoutAnswerInput, GradeUncheckedUpdateWithoutAnswerInput>
    create: XOR<GradeCreateWithoutAnswerInput, GradeUncheckedCreateWithoutAnswerInput>
    where?: GradeWhereInput
  }

  export type GradeUpdateToOneWithWhereWithoutAnswerInput = {
    where?: GradeWhereInput
    data: XOR<GradeUpdateWithoutAnswerInput, GradeUncheckedUpdateWithoutAnswerInput>
  }

  export type GradeUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacher?: UserUpdateOneRequiredWithoutGradesNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
  }

  export type GradeUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacherId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnswerCreateWithoutAnnotationsInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    student: UserCreateNestedOneWithoutAnswersInput
    grade?: GradeCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAnnotationsInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    studentId: string
    grade?: GradeUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutAnnotationsInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnnotationsInput, AnswerUncheckedCreateWithoutAnnotationsInput>
  }

  export type UserCreateWithoutAnnotationsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnotationsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnotationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
  }

  export type AnswerUpsertWithoutAnnotationsInput = {
    update: XOR<AnswerUpdateWithoutAnnotationsInput, AnswerUncheckedUpdateWithoutAnnotationsInput>
    create: XOR<AnswerCreateWithoutAnnotationsInput, AnswerUncheckedCreateWithoutAnnotationsInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAnnotationsInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAnnotationsInput, AnswerUncheckedUpdateWithoutAnnotationsInput>
  }

  export type AnswerUpdateWithoutAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    student?: UserUpdateOneRequiredWithoutAnswersNestedInput
    grade?: GradeUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAnnotationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: GradeUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type UserUpsertWithoutAnnotationsInput = {
    update: XOR<UserUpdateWithoutAnnotationsInput, UserUncheckedUpdateWithoutAnnotationsInput>
    create: XOR<UserCreateWithoutAnnotationsInput, UserUncheckedCreateWithoutAnnotationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnotationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnotationsInput, UserUncheckedUpdateWithoutAnnotationsInput>
  }

  export type UserUpdateWithoutAnnotationsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnotationsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerCreateWithoutGradeInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
    student: UserCreateNestedOneWithoutAnswersInput
    annotations?: AnnotationCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutGradeInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
    studentId: string
    annotations?: AnnotationUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutGradeInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutGradeInput, AnswerUncheckedCreateWithoutGradeInput>
  }

  export type UserCreateWithoutGradesInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    approvals?: GradeCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGradesInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    approvals?: GradeUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGradesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookCreateNestedManyWithoutDirectorInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    questions?: QuestionCreateNestedManyWithoutTeacherInput
    answers?: AnswerCreateNestedManyWithoutStudentInput
    annotations?: AnnotationCreateNestedManyWithoutTeacherInput
    grades?: GradeCreateNestedManyWithoutTeacherInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    uid?: string
    username: string
    email: string
    role: $Enums.Role
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorCode?: string | null
    twoFactorVerified?: boolean
    twoFactorCodeExpiry?: Date | string | null
    workbooks?: WorkbookUncheckedCreateNestedManyWithoutDirectorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    questions?: QuestionUncheckedCreateNestedManyWithoutTeacherInput
    answers?: AnswerUncheckedCreateNestedManyWithoutStudentInput
    annotations?: AnnotationUncheckedCreateNestedManyWithoutTeacherInput
    grades?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type AnswerUpsertWithoutGradeInput = {
    update: XOR<AnswerUpdateWithoutGradeInput, AnswerUncheckedUpdateWithoutGradeInput>
    create: XOR<AnswerCreateWithoutGradeInput, AnswerUncheckedCreateWithoutGradeInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutGradeInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutGradeInput, AnswerUncheckedUpdateWithoutGradeInput>
  }

  export type AnswerUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    student?: UserUpdateOneRequiredWithoutAnswersNestedInput
    annotations?: AnnotationUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    annotations?: AnnotationUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type UserUpsertWithoutGradesInput = {
    update: XOR<UserUpdateWithoutGradesInput, UserUncheckedUpdateWithoutGradesInput>
    create: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGradesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGradesInput, UserUncheckedUpdateWithoutGradesInput>
  }

  export type UserUpdateWithoutGradesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGradesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    approvals?: GradeUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    questions?: QuestionUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUpdateManyWithoutTeacherNestedInput
    grades?: GradeUpdateManyWithoutTeacherNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorCode?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorVerified?: BoolFieldUpdateOperationsInput | boolean
    twoFactorCodeExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workbooks?: WorkbookUncheckedUpdateManyWithoutDirectorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutTeacherNestedInput
    answers?: AnswerUncheckedUpdateManyWithoutStudentNestedInput
    annotations?: AnnotationUncheckedUpdateManyWithoutTeacherNestedInput
    grades?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkbookCreateManyDirectorInput = {
    id?: string
    name: string
    description?: string | null
    tag?: string | null
    isPrivate?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateManyUserInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    workbookId: string
  }

  export type QuestionCreateManyTeacherInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    worksheetId: string
  }

  export type AnswerCreateManyStudentInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questionId: string
  }

  export type AnnotationCreateManyTeacherInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: string
  }

  export type GradeCreateManyTeacherInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    approvedById?: string | null
  }

  export type GradeCreateManyApprovedByInput = {
    id?: string
    score: number
    maxScore?: number
    feedback?: string | null
    status?: $Enums.GradeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedAt?: Date | string | null
    answerId: string
    teacherId: string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workbookId?: string | null
  }

  export type WorkbookUpdateWithoutDirectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheets?: WorksheetUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateWithoutDirectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheets?: WorksheetUncheckedUpdateManyWithoutWorkbookNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutWorkbookNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkbookNestedInput
  }

  export type WorkbookUncheckedUpdateManyWithoutDirectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbook?: WorkbookUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheet?: WorksheetUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheetId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worksheetId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    annotations?: AnnotationUpdateManyWithoutAnswerNestedInput
    grade?: GradeUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
    annotations?: AnnotationUncheckedUpdateManyWithoutAnswerNestedInput
    grade?: GradeUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: AnswerUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneRequiredWithoutGradeNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
  }

  export type GradeUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GradeUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GradeUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answer?: AnswerUpdateOneRequiredWithoutGradeNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradesNestedInput
  }

  export type GradeUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type GradeUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradeStatusFieldUpdateOperationsInput | $Enums.GradeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answerId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbook?: WorkbookUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workbookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorksheetCreateManyWorkbookInput = {
    id?: string
    title: string
    description: string
    order?: number
    isLocked?: boolean
    yjsState?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateManyWorkbookInput = {
    id?: string
    role: $Enums.Role
    joinedAt?: Date | string
    userId: string
  }

  export type AuditLogCreateManyWorkbookInput = {
    id?: string
    type: $Enums.AuditLogType
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type WorksheetUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutWorksheetNestedInput
  }

  export type WorksheetUncheckedUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutWorksheetNestedInput
  }

  export type WorksheetUncheckedUpdateManyWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkbookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAuditLogTypeFieldUpdateOperationsInput | $Enums.AuditLogType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyWorksheetInput = {
    id?: string
    text: string
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type QuestionUpdateWithoutWorksheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutWorksheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutWorksheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    text?: string
    status?: $Enums.AnswerStatus
    yjsState?: Uint8Array | null
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAnswersNestedInput
    annotations?: AnnotationUpdateManyWithoutAnswerNestedInput
    grade?: GradeUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    annotations?: AnnotationUncheckedUpdateManyWithoutAnswerNestedInput
    grade?: GradeUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    status?: EnumAnswerStatusFieldUpdateOperationsInput | $Enums.AnswerStatus
    yjsState?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationCreateManyAnswerInput = {
    id?: string
    comment: string
    suggestedText?: string | null
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type AnnotationUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnotationUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    suggestedText?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
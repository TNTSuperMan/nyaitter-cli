/**
 * 認証 API
 * ログイン・ログアウト・2要素認証・セッション管理・Scratch連携・外部認証などを行います。
 */
export declare class AuthAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    getProvidersResponse(): any;
    pollLoginApprovalResponse(approvalId: any, approvalToken: any): any;
    generateScratchResponse(username: any): any;
    verifyScratchResponse(body: any): any;
    initiateEmailResponse(email: any): any;
    verifyEmailResponse(body: any): any;
    initiatePasskeyResponse(body?: {}): any;
    verifyPasskeyResponse(body: any): any;
    initiateNyaitterResponse(body: any): any;
    verifyProviderResponse(provider: any, body: any): any;
    /**
     * ログインしてセッショントークンを取得します。
     *
     * @param {object} params
     * @param {string} params.username - ユーザー名または Scratch ID
     * @param {string} params.password - パスワード
     * @param {string} [params.token2fa] - 2要素認証コード
     * @returns {Promise<{ success: boolean, token?: string, user?: object, require_2fa?: boolean }>}
     */
    login({ username, password, token2fa }?: {
        username: string;
        password: string;
        token2fa?: string;
    }): Promise<{
        success: boolean;
        token?: string;
        user?: object;
        require_2fa?: boolean;
    }>;
    /**
     * ログアウトします。
     *
     * @returns {Promise<{ success: boolean }>}
     */
    logout(): Promise<{
        success: boolean;
    }>;
    /**
     * ログイン中のユーザー情報を取得します。
     *
     * @returns {Promise<{ user: object, isBot: boolean, tokenType: string }>}
     */
    getMe(): Promise<{
        user: object;
        isBot: boolean;
        tokenType: string;
    }>;
    /**
     * 新規アカウントを登録します。
     *
     * @param {object} params
     * @param {string} params.scratchId - Scratch ユーザー名
     * @param {string} params.password - パスワード
     * @param {string} [params.username] - 表示名
     * @param {string} [params.email] - メールアドレス
     * @returns {Promise<{ success: boolean, user: object, token?: string }>}
     */
    register({ scratchId, password, username, email }?: {
        scratchId: string;
        password: string;
        username?: string;
        email?: string;
    }): Promise<{
        success: boolean;
        user: object;
        token?: string;
    }>;
    /**
     * Scratch 認証用の確認コードを取得します。
     *
     * @param {string} scratchId - Scratch ユーザー名
     * @returns {Promise<{ success: boolean, code: string }>}
     */
    checkScratch(scratchId: string): Promise<{
        success: boolean;
        code: string;
    }>;
    /**
     * Scratch プロフィール確認コードを検証してアカウントを連携します。
     *
     * @param {object} params
     * @param {string} params.scratchId - Scratch ユーザー名
     * @param {string} params.code - 確認コード
     * @returns {Promise<{ success: boolean, verified: boolean }>}
     */
    linkScratch({ scratchId, code }?: {
        scratchId: string;
        code: string;
    }): Promise<{
        success: boolean;
        verified: boolean;
    }>;
    /**
     * 連携されているサブアカウント一覧を取得します。
     *
     * @returns {Promise<{ accounts: object[] }>}
     */
    getAccounts(): Promise<{
        accounts: object[];
    }>;
    /**
     * 操作対象のアカウントを切り替えます。
     *
     * @param {object} params
     * @param {number} params.accountId - 切り替え先のアカウント ID
     * @param {string} [params.password] - パスワード
     * @returns {Promise<{ success: boolean, token?: string, user: object }>}
     */
    switchAccount({ accountId, password }?: {
        accountId: number;
        password?: string;
    }): Promise<{
        success: boolean;
        token?: string;
        user: object;
    }>;
    /**
     * 既存のアカウントをサブアカウントとして連携します。
     *
     * @param {object} params
     * @param {number|string} params.accountId - 連携するアカウント ID またはユーザー名
     * @param {string} params.password - パスワード
     * @returns {Promise<{ success: boolean, accounts: object[] }>}
     */
    linkAccount({ accountId, password }?: {
        accountId: number | string;
        password: string;
    }): Promise<{
        success: boolean;
        accounts: object[];
    }>;
    /**
     * サブアカウントの連携を解除します。
     *
     * @param {number} accountId - 解除するアカウント ID
     * @returns {Promise<{ success: boolean }>}
     */
    unlinkAccount(accountId: number): Promise<{
        success: boolean;
    }>;
    /**
     * 2要素認証のセットアップを開始します。
     *
     * @returns {Promise<{ secret: string, qr_code_uri: string }>}
     */
    setup2FA(): Promise<{
        secret: string;
        qr_code_uri: string;
    }>;
    /**
     * 2要素認証を有効化します。
     *
     * @param {object} params
     * @param {string} params.code - 認証アプリの 6 桁コード
     * @param {string} params.secret - セットアップ時に取得したシークレット
     * @returns {Promise<{ success: boolean }>}
     */
    verify2FA({ code, secret }?: {
        code: string;
        secret: string;
    }): Promise<{
        success: boolean;
    }>;
    /**
     * 2要素認証を無効化します。
     *
     * @param {string} code - 認証アプリの 6 桁コード
     * @returns {Promise<{ success: boolean }>}
     */
    disable2FA(code: string): Promise<{
        success: boolean;
    }>;
    /**
     * アクティブなログインセッション一覧を取得します。
     *
     * @returns {Promise<{ sessions: object[] }>}
     */
    getSessions(): Promise<{
        sessions: object[];
    }>;
    /**
     * 指定したログインセッションを取り消しします。
     *
     * @param {string} sessionId - セッション ID
     * @returns {Promise<{ success: boolean }>}
     */
    revokeSession(sessionId: string): Promise<{
        success: boolean;
    }>;
    /**
     * 外部ログイン認証を開始します。
     *
     * @param {object} params
     * @param {string} params.provider - 認証プロバイダー名
     * @param {string} [params.redirectUri] - リダイレクト URL
     * @returns {Promise<{ auth_url: string, token: string }>}
     */
    startExternalAuth({ provider, redirectUri }?: {
        provider: string;
        redirectUri?: string;
    }): Promise<{
        auth_url: string;
        token: string;
    }>;
    /**
     * 外部認証の確認を行います。
     *
     * @param {object} params
     * @param {string} params.token - 外部認証トークン
     * @param {string} [params.password] - パスワード
     * @returns {Promise<{ success: boolean }>}
     */
    confirmExternalAuth({ token, password }?: {
        token: string;
        password?: string;
    }): Promise<{
        success: boolean;
    }>;
    /**
     * 外部認証を完了しログインします。
     *
     * @param {string} token - 外部認証トークン
     * @returns {Promise<{ success: boolean, token?: string, user?: object }>}
     */
    completeExternalAuth(token: string): Promise<{
        success: boolean;
        token?: string;
        user?: object;
    }>;
    /**
     * アカウント削除を申請します。
     *
     * @param {string} password - アカウントのパスワード
     * @returns {Promise<{ success: boolean, scheduled_deletion_at: string }>}
     */
    requestAccountDeletion(password: string): Promise<{
        success: boolean;
        scheduled_deletion_at: string;
    }>;
    /**
     * アカウント削除申請を取り消します。
     *
     * @param {string} password - アカウントのパスワード
     * @returns {Promise<{ success: boolean }>}
     */
    cancelAccountDeletion(password: string): Promise<{
        success: boolean;
    }>;
}

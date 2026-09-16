/**
 * システム / ユーティリティ API
 * サーバー状態・ヘルスチェック・コミュニティルール・URL カード展開・oEmbed・ナビゲーション集計などの取得を行います。
 */
export declare class SystemAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    getStatusResponse(): any;
    getApiSpecResponse(options: any): Promise<any>;
    getDocsResponse(options: any): Promise<any>;
    getDocResponse(docId: any, options: any): Promise<any>;
    getRulesResponse(options: any): any;
    _getWithFallback(primaryPath: any, fallbackPath: any, options: any): Promise<any>;
    /**
     * サーバーの稼働状態・制限値・認証プロバイダー設定を取得します。
     *
     * @returns {Promise<{ server: string, timestamp: string, database: string, identity: object, auth_methods: string[], client_limits: object }>}
     *
     * @example
     * const status = await client.system.getStatus();
     * console.log('サーバー状態:', status.server, status.database);
     */
    getStatus(): Promise<{
        server: string;
        timestamp: string;
        database: string;
        identity: object;
        auth_methods: string[];
        client_limits: object;
    }>;
    /**
     * サーバーのヘルスチェック状態を取得します。
     *
     * @returns {Promise<{ status: string, timestamp: string, version: string, uptime: number, env: string }>}
     */
    getHealth(): Promise<{
        status: string;
        timestamp: string;
        version: string;
        uptime: number;
        env: string;
    }>;
    /**
     * サーバーのレディネス状態を取得します。
     *
     * @returns {Promise<{ status: string, timestamp: string }>}
     */
    getReady(): Promise<{
        status: string;
        timestamp: string;
    }>;
    /**
     * コミュニティルール・利用規約を取得します。
     *
     * @returns {Promise<{ success: boolean, rules: string, updated_at: string }>}
     */
    getRules(): Promise<{
        success: boolean;
        rules: string;
        updated_at: string;
    }>;
    /**
     * 指定した URL の OGP カード情報を取得します。
     *
     * @param {string} url - 展開対象の URL
     * @returns {Promise<{ card: object }>}
     */
    getUrlCard(url: string): Promise<{
        card: object;
    }>;
    /**
     * Nyaitter 投稿等の oEmbed 埋め込みデータを取得します。
     *
     * @param {string} url - 投稿 URL
     * @returns {Promise<object>} oEmbedON レスポンス
     */
    getOembed(url: string): Promise<object>;
    /**
     * ナビゲーション表示用の未読カウントサマリーを取得します。
     *
     * @returns {Promise<{ notification_unread_count: number, dm_unread_count: number }>}
     */
    getUiSummary(): Promise<{
        notification_unread_count: number;
        dm_unread_count: number;
    }>;
}

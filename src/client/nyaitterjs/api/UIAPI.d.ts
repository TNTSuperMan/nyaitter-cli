/**
 * UI / ナビゲーション集計 API
 * ナビゲーション用の未読カウントサマリーやテーマ設定等の取得を行います。
 */
export declare class UIAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    /**
     * ナビゲーション表示用の未読カウントサマリーを取得します。
     *
     * @returns {Promise<{ notification_unread_count: number, dm_unread_count: number }>}
     *
     * @example
     * const summary = await client.ui.getSummary();
     * console.log(`未読通知: ${summary.notification_unread_count} 件, 未読DM: ${summary.dm_unread_count} 件`);
     */
    getSummary(): Promise<{
        notification_unread_count: number;
        dm_unread_count: number;
    }>;
}

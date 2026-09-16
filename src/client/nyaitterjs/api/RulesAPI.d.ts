/**
 * コミュニティルール API
 * Nyaitter サーバーの利用規約・ガイドラインを取得します。
 */
export declare class RulesAPI {
    _client: any;
    /** @param {import('../NyaitterClient').NyaitterClient} client */
    constructor(client: import('../NyaitterClient').NyaitterClient);
    /**
     * サーバーのコミュニティルール・利用規約を取得します。
     *
     * @returns {Promise<{ success: boolean, rules: string, updated_at: string }>}
     *
     * @example
     * const { rules } = await client.rules.get();
     * console.log(rules);
     */
    get(): Promise<{
        success: boolean;
        rules: string;
        updated_at: string;
    }>;
}

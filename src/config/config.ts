import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string =
"inside first tobacco already skull run second post zoo weasel when toward stay drastic window crumble dynamic jacket balcony harbor begin include merge about display";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}

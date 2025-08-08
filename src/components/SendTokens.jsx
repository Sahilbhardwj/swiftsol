import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendToken() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendtoken() {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;

        const transaction = new Transaction();

        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );

        await wallet.sendTransaction(transaction, connection);
        alert("transaction done");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f3f4f6", // gray-100
                padding: "1rem",
                borderRadius: "0.375rem",
                margin: "0.5rem",
            }}
        >
            <input
                type="text"
                id="to"
                placeholder="enter Recepient public address"
                style={{
                    backgroundColor: "#e5e7eb", // gray-200
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    margin: "0.25rem",
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                }}
            />
            <input
                type="text"
                id="amount"
                placeholder="enter amount"
                style={{
                    backgroundColor: "#e5e7eb",
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    margin: "0.25rem",
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                }}
            />
            <button
                onClick={sendtoken}
                style={{
                    backgroundColor: "#512da8", // custom blue.500
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    margin: "0.25rem",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Send SOL
            </button>
        </div>
    );
}

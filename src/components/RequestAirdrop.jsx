import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestairdrop() {
        const publickey = wallet.publicKey;
        let inputbox = document.getElementById("amount");
        const amount = inputbox.value;
        await connection.requestAirdrop(publickey, amount * LAMPORTS_PER_SOL);
        inputbox.value = "";
        alert("done");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f3f4f6", // Tailwind gray-100
                padding: "1rem",
                borderRadius: "0.375rem", // rounded-md
                margin: "0.5rem"
            }}
        >
            <input
                id="amount"
                type="text"
                placeholder="enter amount of Sol"
                style={{
                    backgroundColor: "#e5e7eb", // Tailwind gray-200
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    margin: "0.25rem",
                    fontWeight: "bold",
                    border: "none",
                    outline: "none"
                }}
            />
            <button
                onClick={requestairdrop}
                style={{
                    backgroundColor: "#512da8", // custom blue.500
                    padding: "1rem",
                    borderRadius: "0.375rem",
                    margin: "0.25rem",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Send Airdrop
            </button>
        </div>
    );
}

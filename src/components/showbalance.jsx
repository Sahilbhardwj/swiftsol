import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function Showbalance() {
    const [showornot, setShowornot] = useState(false);
    const wallet = useWallet();
    const { connection } = useConnection();

    async function showbalance({ check }) {
        const publickey = wallet.publicKey;
        const balance = await connection.getBalance(publickey);
        const balance_SOL = balance / LAMPORTS_PER_SOL;
        const display = document.getElementById("balance");
        if (check) {
            display.innerHTML = "Your balance is " + balance_SOL + " SOL";
        } else {
            display.innerHTML = "...";
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f3f4f6", // bg-gray-100
                padding: "1rem",
                borderRadius: "0.375rem",
                margin: "0.5rem"
            }}
        >
            <button
                onClick={() => {
                    const toggledshow = !showornot;
                    setShowornot((c) => !c);
                    showbalance({ check: toggledshow });
                }}
                style={{
                     backgroundColor: "#512da8", 
                    fontWeight: "600",          
                    padding: "0.75rem",
                    margin: "0.25rem",
                    borderRadius: "0.375rem",
                    color: "white"
                }}
            >
                Show Balance
            </button>

            <span
                id="balance"
                style={{
                    padding: "0.75rem",
                    margin: "0.25rem",
                    borderRadius: "0.375rem",
                    fontWeight: "600",
                    color: "black",
                    backgroundColor: "#e5e7eb" // bg-gray-200
                }}
            >
                Your Balance will show here
            </span>
        </div>
    );
}

'use client'

import { FocusEvent, FormEvent, useState } from "react";

export default function FormNomeIdadeComponent() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    function enviarFormulario(event: 
        FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(`Nome: ${nome}, Idade: ${idade}`);
    }

    return (
        <form 
            action =""
            onSubmit={enviarFormulario}
            className="bg-zinc-200 border border-zinc-400 rounded-md px-7 py-7 text-zinc-600 text-3xl space-y-3.5"  
        >
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome"
                className="bg-zinc-100 border border-zinc-400 rounded-md ms-4 text-zinc-600 outline-none"
                onBlur={
                    (element: FocusEvent<HTMLInputElement>) => setNome(String(element.target.value))                    
                    }
                />
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade"
                className="bg-zinc-100 border border-zinc-400 rounded-md ms-4 text-zinc-600 outline-none"
                onBlur={
                    (element: FocusEvent<HTMLInputElement>) => setIdade(Number(element.target.value))                    
                    }
                />
            </div>
            <div>
                <button type="submit"
                className="bg-zinc-100 w-full py-2 border border-zinc-500 rounded-md cursor-pointer hover:bg-zinc-300"
                >
                Processar</button>
            </div>
        </form>
    );
}
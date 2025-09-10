## 🛠️ Móveis Planejados — Solicitação de Orçamento
Este projeto é uma aplicação web desenvolvida com React no frontend e Node.js + Nodemailer no backend, com o objetivo de permitir que clientes solicitem orçamentos personalizados para ambientes planejados. Ao preencher o formulário, o usuário recebe um e-mail de confirmação com os dados enviados.

## 🚀 Tecnologias Utilizadas
```
- React com Create React App
- Bootstrap para estilização responsiva
- Node.js + Express para o servidor backend
- Nodemailer para envio de e-mails via Gmail
- TypeScript no frontend
- Fetch API para comunicação entre frontend e backend
```

## 📦 Estrutura do Projeto
```
moveis-planejados/
├── backend/
│   └── server.js
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   │   ├── footer/
│   │   └── header/
│   ├── pages/
│   │   ├── contato/
│   │   ├── galeria/
│   │   ├── home/
│   │   └── sobre/
├── types/
```

## 📧 Configuração do envio de e-mail
```
Para que o envio funcione corretamente:
- Ative a verificação em duas etapas na sua conta Gmail
- Gere uma senha de aplicativo no painel de segurança do Google
- Insira essa senha no server.js:
auth: {
  user: 'seuemail@gmail.com',
  pass: 'sua_senha_de_aplicativo'
}
```

✅ Funcionalidades
- Formulário com campos personalizados
- Validação de dados
- Envio automático de e-mail com os dados preenchidos
- Feedback visual ao usuário após envio

📌 Deploy
Você pode hospedar o frontend gratuitamente em:
- Vercel
- Netlify
Para o backend, recomenda-se:
- Render
- Railway

## 🔧 Instalação e Execução

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/henriquecampaner/app-fuma-diesel.git
    cd FumacaDieselAPP
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Inicie o projeto:**
    ```bash
    npx expo start
    ```
    Siga as instruções do terminal para rodar no emulador ou dispositivo físico.
4. **Acesse http://localhost:3000**
5. **Instale e inicie o backend**
```cd ../backend
npm install
node server.js

O backend estará rodando em http://localhost:5000
```

---

## 🙋‍♂️ Contato

Desenvolvido por [Henrique Camargo](https://github.com/HenriqueCamarg0).

---

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota para envio de e-mail
app.post('/send-email', async (req, res) => {
const {
  nome,
  email,
  telefone,
  cidade,
  investimento,
  ambientes,
  horario,
  termosAceitos
} = req.body;

  if (!nome || !email) {
    return res.status(400).send('Nome e e-mail são obrigatórios');
  }

  // Configuração do transporte SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'henry2camargo@gmail.com', // seu e-mail
      pass: 'xaxufhsqrevfqrkp'         // senha de aplicativo (sem espaços)
    }
  });

  // Conteúdo do e-mail
const mailOptions = {
  from: 'henry2camargo@gmail.com',
  to: email,
  subject: 'Confirmação de recebimento da sua solicitação de orçamento',
  html: `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 30px; background-color: #f9f9f9; color: #333;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #c0392b; margin-bottom: 20px;">Olá ${nome},</h2>
        <p style="font-size: 16px;">Agradecemos por entrar em contato com a <strong>Equipe Móveis Planejados</strong>.</p>
        <p style="font-size: 16px;">Recebemos sua solicitação de orçamento e estamos iniciando a análise das informações enviadas. Em breve, nossa equipe entrará em contato para validar os dados e apresentar uma proposta personalizada.</p>

        <h3 style="margin-top: 30px; color: #444;">📋 Detalhes:</h3>
        <ul style="font-size: 15px; line-height: 1.8; padding-left: 20px;">
          <li><strong>Nome:</strong> ${nome}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${telefone}</li>
          <li><strong>Cidade:</strong> ${cidade}</li>
          <li><strong>Investimento estimado:</strong> ${investimento}</li>
          <li><strong>Ambientes desejados:</strong> ${Array.isArray(ambientes) && ambientes.length > 0 ? ambientes.join(', ') : 'Nenhum selecionado'}</li>
          <li><strong>Melhor horário para contato:</strong> ${horario || 'Não informado'}</li>
          <li><strong>Termos aceitos:</strong> ${termosAceitos ? 'Sim' : 'Não'}</li>
        </ul>

        <p style="margin-top: 30px; font-size: 15px;">Se você tiver dúvidas ou quiser adiantar o atendimento, basta responder este e-mail ou entrar em contato conosco pelo WhatsApp.</p>

        <p style="margin-top: 40px; font-size: 15px;">Atenciosamente,<br />
        <strong>Equipe Móveis Planejados</strong></p>
      </div>
    </div>
  `
};


  // Envio do e-mail
  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail enviado para ${email}`);
    res.status(200).send('Email enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar email');
  }
});

// Inicialização do servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
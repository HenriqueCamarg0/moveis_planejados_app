import React from 'react';
import './contato.css'; // Se você tiver estilos personalizados

const Contato: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const telefone = (document.getElementById('telefone') as HTMLInputElement).value;
    const cidade = (document.getElementById('cidade') as HTMLInputElement).value;
    const investimento = (document.getElementById('investimento') as HTMLSelectElement).value;

    const ambientes = ['cozinha', 'sala', 'quarto', 'servico', 'banheiro']
      .filter(id => (document.getElementById(id) as HTMLInputElement).checked);

    const horario = ['manha', 'almoco', 'tarde', 'noite']
      .find(id => (document.getElementById(id) as HTMLInputElement).checked);

    const termosAceitos = (document.getElementById('termos') as HTMLInputElement).checked;

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          cidade,
          investimento,
          ambientes,
          horario,
          termosAceitos
        })
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso! Verifique seu e-mail.');
      } else {
        alert('Erro ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <section className="contato-section container py-5">
      <h2 className="text-center mb-4">Solicite seu Projeto</h2>
      <p className="text-center mb-5">
        Preencha o formulário abaixo e nossa equipe entrará em contato com você para criar o ambiente dos seus sonhos.
      </p>

      <form className="row g-4" onSubmit={handleSubmit}>
        {/* Todos os campos do formulário permanecem como estão */}
        {/* ... seu HTML está ótimo e bem estruturado ... */}

        <div className="col-md-12 text-center mt-4">
          <button type="submit" className="btn-orcamento">Solicitar orçamento</button>
        </div>
      </form>
    </section>
  );
};

export default Contato;
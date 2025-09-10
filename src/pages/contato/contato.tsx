import React from 'react';
import './contato.css';

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
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" placeholder="Seu nome completo" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="seu@email.com" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="cidade" className="form-label">Cidade</label>
          <input type="text" className="form-control" id="cidade" placeholder="Ex: Jundiaí" />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefone" className="form-label">Telefone / WhatsApp</label>
          <input type="tel" className="form-control" id="telefone" placeholder="(11) 91234-5678" />
        </div>

        <div className="col-md-6">
          <label htmlFor="investimento" className="form-label">Expectativa de Investimento</label>
          <select className="form-select" id="investimento">
            <option value="">Selecione</option>
            <option value="25mil">Até 25 mil reais</option>
            <option value="50mil">Até 50 mil reais</option>
            <option value="100mil">Acima de 50 mil reais</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Ambientes desejados</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="cozinha" />
            <label className="form-check-label" htmlFor="cozinha">Cozinha / Área Gourmet</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="sala" />
            <label className="form-check-label" htmlFor="sala">Home Theater / Sala</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="quarto" />
            <label className="form-check-label" htmlFor="quarto">Dormitórios</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="servico" />
            <label className="form-check-label" htmlFor="servico">Áreas de Serviço</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="banheiro" />
            <label className="form-check-label" htmlFor="banheiro">Banheiros</label>
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Melhor horário para contato</label><br />
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="horario" id="manha" />
            <label className="form-check-label" htmlFor="manha">Manhã</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="horario" id="almoco" />
            <label className="form-check-label" htmlFor="almoco">Horário de almoço</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="horario" id="tarde" />
            <label className="form-check-label" htmlFor="tarde">Tarde</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="horario" id="noite" />
            <label className="form-check-label" htmlFor="noite">Depois das 18h</label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="termos" />
            <label className="form-check-label" htmlFor="termos">
              Li e aceito os termos deste site
            </label>
          </div>
        </div>

        <div className="col-md-12 text-center mt-4">
          <button type="submit" className="btn-orcamento">Solicitar orçamento</button>
        </div>
      </form>
    </section>
  );
};

export default Contato;
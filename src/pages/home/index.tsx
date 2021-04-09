import React, { useState, useEffect, FormEvent } from 'react';
import './style.css';

interface Disciplina {
  name: string;
  disciplina: string;
  time: string;
  date: string;
}

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  function submitForm() {
    return 0;
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-input">
          <strong>Disciplina</strong>
          <input
            placeholder="Digite a Disciplina lecionada"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <strong>Professor</strong>
          <input
            placeholder="Digite o nome"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <strong>Dia da Semana</strong>
          <input
            placeholder="Digite os dias da semana"
            value={date}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <strong>Horário</strong>
          <input
            placeholder="Digite o horário de trabalho"
            value={time}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};

export default Home;

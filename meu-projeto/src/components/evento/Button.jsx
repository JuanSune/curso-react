function btn({ event, nome }) {
  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          id=""
         
          placeholder="Digite o que quer aparecer no BOTAO"
        />
      </div>
      <div>
        <button onClick={event} value={nome} />
      </div>
    </div>
  );
}

export default btn;

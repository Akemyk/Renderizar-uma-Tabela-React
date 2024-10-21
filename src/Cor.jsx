function Paragrafo({ paragrafo }) {
   
    let cor;
    
    if (paragrafo==true) {
      cor = 'green'; 
    } else {
      cor = 'black'; 
    }
  
    return (
      <p style={{ color: cor }}>
        Este Paragrafo muda de cor
      </p>
    );
  }
export default Paragrafo
import styles from "./About.module.css"

const About = () => {
    return(
    <div className={styles.contenedor}>
        <h2>{"[ ABOUT ]"}</h2>
        <p>Bienvenido a nuestra tienda de refrigeración y aire acondicionado. En [Nombre de la Empresa], nos enorgullece ofrecer productos y servicios de alta calidad para satisfacer todas tus necesidades de refrigeración.</p>
      
        <p>Nuestra misión es brindar soluciones eficientes y sostenibles en refrigeración y aire acondicionado, con un enfoque especial en la eficiencia energética y el cuidado del medio ambiente. Nos esforzamos por ser líderes en la industria al proporcionar asesoramiento técnico experto y productos de vanguardia.</p>
      
        <p>Contamos con un equipo de profesionales altamente capacitados y comprometidos con ofrecerte un servicio excepcional. Estamos aquí para ayudarte a encontrar las mejores opciones de refrigeración que se adapten a tus necesidades específicas.</p>
      
        <p>En [Nombre de la Empresa], nos destacamos por nuestros valores fundamentales:</p>
        
        <ul>
          <li><strong>Calidad:</strong> Nos comprometemos a ofrecer productos y servicios de la más alta calidad para garantizar la satisfacción de nuestros clientes.</li>
          <li><strong>Asesoramiento técnico:</strong> Nuestro equipo de expertos está aquí para brindarte el mejor asesoramiento técnico y ayudarte a tomar decisiones informadas sobre tus necesidades de refrigeración.</li>
          <li><strong>Eficiencia energética:</strong> Nos preocupamos por la eficiencia energética y nos esforzamos por ofrecerte soluciones que reduzcan el consumo de energía y minimicen el impacto ambiental.</li>
          <li><strong>Cuidado del medio ambiente:</strong> Estamos comprometidos con la protección del medio ambiente y promovemos prácticas responsables en nuestra industria.</li>
        </ul>
        <img src="/Imagenes/Equipamiento.jpg" alt="Descripción de la imagen"></img>       
    </div>        
    )
}

export default About;
// Importa el módulo PropTypes para validar las propiedades del componente
import PropTypes from 'prop-types';

// Importa los estilos desde el archivo SCSS
import styles from './UserInfo.module.scss';

// Definir y exportar el componente funcional UserInfo
export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    // Contenedor principal con estilos del archivo SCSS
    <div className={styles.root}>
      {/* Imagen del avatar con estilos específicos */}
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={fullName} />

      {/* Contenedor de detalles del usuario */}
      <div className={styles.userDetails}>
        {/* Nombre del usuario con estilos específicos */}
        <span className={styles.userName}>{fullName}</span>
        
        {/* Texto adicional del usuario con estilos específicos */}
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};

// Validación de las propiedades utilizando PropTypes
UserInfo.propTypes = {
  avatarUrl: PropTypes.string, // Se espera que avatarUrl sea un String
  fullName: PropTypes.string,  // Se espera que fullName sea un String
  additionalText: PropTypes.string, // Se espera que additionalText sea un String
};



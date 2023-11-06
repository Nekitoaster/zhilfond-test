import styles from './PersonData.module.css'

// Компонент подробной иформации о сотруднике

function PersonData({ item }) {
  const { name, email, phone } = item;

  return (
    <div className={styles.profile}>
      <img src="src/img/profile-photo.png" alt="" />
      <div className={styles.data}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>
          email: <span>{email}</span>
        </p>
        <p className={styles.phone}>
          phone: <span>{phone}</span>
        </p>
        <p className={styles.about}>О себе:</p>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          provident, distinctio quas cumque necessitatibus qui recusandae et ut
          autem voluptas accusantium. Repudiandae error fugiat, ducimus,
          explicabo optio minus officia vero consequatur possimus, molestiae
          aliquam reiciendis tenetur autem saepe atque cupiditate iste? Quod
          error nisi perferendis et esse nostrum culpa vero porro sed excepturi
          voluptas minima veritatis eligendi est laboriosam alias unde fugiat
          facere illum rerum, mollitia possimus! Voluptatem, pariatur eum.
        </p>
      </div>
    </div>
  );
}

export default PersonData;

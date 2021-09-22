import style from './Notification.module.css';

const Notification = (props: any) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = style.error;
  }
  if (props.status === 'success') {
    specialClasses = style.success;
  }

  const cssClasses = `${style.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
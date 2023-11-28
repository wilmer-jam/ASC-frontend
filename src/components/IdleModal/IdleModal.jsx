const IdleModal = ({ close, handleLogout }) => {
  setTimeout(() => {
    handleLogout();
  }, 600000);

  return (
    <section>
      <button onClick={close}>Stay Signed In</button>
    </section>
  );
};

export default IdleModal;

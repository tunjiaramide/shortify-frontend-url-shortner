const ErrorMessage = ({ message }: { message: string }) => {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        <p>{message}</p>
      </div>
    );
};


export default ErrorMessage;
  
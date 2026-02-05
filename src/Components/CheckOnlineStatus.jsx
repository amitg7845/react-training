import useOnline from "../utils/useOnline";

function CheckOnlineStatus() {
  return (
    <div className="status-wrp">
      <h3>
        Check Online Status : {useOnline() ? "Online (🟢)" : "Offline (🔴)"}
      </h3>
    </div>
  );
}

export default CheckOnlineStatus;

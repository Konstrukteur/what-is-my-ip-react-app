const Label = ({ position }) => {
  return (
    <div>
      <img src={`https://flagsapi.com/${position.country}/flat/64.png`} />
      <table>
        <tbody>
          <tr>
            <td>IP</td>
            <td>{`${position.ip}, ${position.version}`}</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>{position.org}</td>
          </tr>
          <tr>
            <td>Timezone</td>
            <td>{position.timezone}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{`${position.postal} ${position.city}, ${position.region} ${position.country_name}, ${position.continent_code}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Label;

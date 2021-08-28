export default ({link}) =>
  <div className="detail-mask" style={{padding: 0}}>
    <iframe
      frameBorder="0"
      src={link}
      allowFullScreen={true}
      style={{width: '100%', height: '100%'}}
    />
  </div>

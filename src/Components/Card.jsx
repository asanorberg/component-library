function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="rounded-xl w-96 h-96 flex-shrink-0 border shadow-lg space-y-4 overflow-hidden">
      <div className=" h-3/5 w-full">
        <img
          className="h-full w-full object-cover opacity-90"
          src={imgSrc}
          alt={imgAlt}
          href={href}
        />
      </div>
      <div className="h-1/2 p-8 pt-0"> {children}</div>
    </div>
  );
}

export default Card;

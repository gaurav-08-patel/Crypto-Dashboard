const InfoCards = () => {
  return (
    <div className="flex gap-5 max-lg:flex-col">
      <div className="bg-white bg-[url(/Visual%201.png)] rounded-2xl p-4 flex-1/2">
        <span className="p-1.5 text-sm bg-[#5F00D9] text-white rounded-2xl">
          Loan
        </span>
        <p className="mt-2 font-medium max-sm:text-sm">
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </p>
      </div>
      <div
        className="bg-[#5F00D9] rounded-2xl p-4 flex-1/2
          bg-[url(/Visual%202.png)]"
      >
        <span className="p-1.5 text-sm bg-[white] text-[#5F00D9] rounded-2xl">
          Contact
        </span>
        <p className="mt-2 font-medium max-sm:text-sm">
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </p>
      </div>
    </div>
  );
};

export default InfoCards;

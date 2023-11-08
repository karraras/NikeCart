function TitleName(prop) {
  const { name } = prop;
  return (
    <div className="py-[20px]">
      <h1 className="font-extrabold  text-2xl sm:text-3xl md:text-4xl">
        {name}
      </h1>
    </div>
  );
}

export default TitleName;

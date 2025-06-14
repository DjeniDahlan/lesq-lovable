
const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Kursus</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</p>
            <p className="text-muted-foreground">Guru Berpengalaman</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50.000+</p>
            <p className="text-muted-foreground">Siswa</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">200.000+</p>
            <p className="text-muted-foreground">Jam Belajar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

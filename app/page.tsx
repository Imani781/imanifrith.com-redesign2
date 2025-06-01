export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Imani Frith
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Full-Stack Developer & Designer</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            I build beautiful, functional, and accessible web experiences using modern technologies.
          </p>
        </div>
      </div>
    </div>
  )
}

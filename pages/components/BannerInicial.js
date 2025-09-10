export default function BannerInicial() {
    return (
        <section className="flex min-h-screen flex-col items center justify-center bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-6" >Não tem ninguém em casa, volte mais tarde</h1>
            <img
            src="/ad-mech.jpeg"
            alt="Imagem do banner inicial"
            className="w-64 h-auto rounded-lg shadow-lg"
            />
            
        </section>
        
    );
}
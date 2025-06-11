
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🎬 Gerador de Prompts Cinematográficos</h1>
      <p className="mb-4">Bem-vindo! Acesse abaixo o gerador de prompts personalizados para Google Veo 3.</p>
      <a
        href="/dashboard/prompt-generator"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Acessar Gerador
      </a>
    </main>
  );
}

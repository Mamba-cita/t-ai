

function App() {

  return (
    <>
    <main className="max-w-2xl mx-auto flex gap-16 px-4">
      <div className="py-8 flex flex-col justify-center">
      <h1 className="text-4xl font-bold uppercase mb-4">
      <span className="text-5xl">
              URL to Video
            </span>
            <br />
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
              with power of T-AI
            </span>
        </h1>
      <p>This app generates videos using ai</p>
      {/* Form for uploading a video */}
      <form className="grid gap-2">
        <input className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow" type="url" id="videoInput" name="video" placeholder="https//..." />
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-full uppercase"type="submit">Generate&nbsp;Video</button>
      </form>
      </div>
      <div className="p-8">
        <div className="bg-gray-200 w-[240px] h-[380px]"></div>
      </div>
    </main>
    
      {/* Buttons for generating different types of videos */}
      {/* Displaying the generated video */}
      {/* Error handling */}
      {/* Additional features like voice-to-text, image-to-text, etc */}
      {/* Responsive design */}
      {/* Unit tests */}

    </>
  )
}

export default App

export const Description = (props) => {
    const { descriptionOpened, setDescriptionOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setDescriptionOpened(!descriptionOpened)}
          className="z-50 flex top-4 right-4 md:top-12 md:right-12 p-3 bg-black w-11 h-11 rounded-md justify-center backdrop-filter backdrop-blur-lg"
        >
          <div
            className={`flex bg-blue-600 h-1 rounded-md w-full transition-all ${
              descriptionOpened ? "rotate-45 translate-y-0.5" : ""
            }`}
          />
          <div
            className={`flex bg-blue-600 h-3 rounded-md w-full my-1 ${
              descriptionOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`flex bg-blue-600 h-1 rounded-md w-full transition-all ${
              descriptionOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg
          ${descriptionOpened ? "w-full md:w-80" : "w-0"}`}
        >
          <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8 bg-opacity-50 text-white">
            <p>D/A/W/S: Triggers the "walk_T-pose" animation.</p>
            <p>B: Triggers the "Punch_T-pose" animation.</p>
            <p>F: Triggers the "Fly_T-pose" animation.</p>
            <p>T: Triggers the "sitTalk_T-pose" animation.</p>
            <p>J: Triggers the "Jump_T-pose" animation.</p>
            <p>H: Triggers the "Dance_T-pose" animation.</p>
            <p>G: Triggers the "Sing_T-pose" animation.</p>
            <p>P: Triggers the "PushUp_T-pose" animation.</p>
            <p>K: Triggers the "knee-kick" animation.</p>
            <p>M: Triggers the "mma" animation.</p>
            <p>X: Triggers the "swim" animation.</p>
            <p>8: Triggers the "mma-kick" animation.</p>
            <p>1: Triggers the "standing" animation.</p>
            <p>2: Triggers the "sit_T-pose" animation.</p>
            <p>3: Triggers the "LongJump_T-pose" animation.</p>
            <p>4: Triggers the "Turn_T-pose" animation.</p>
            <p>5: Triggers the "FastRun_T-pose" animation.</p>
            <p>6: Triggers the "BackFlip_T-pose" animation.</p>
            <p>7: Triggers the "side-kick" animation.</p>
            <p>Default: Triggers the "standing" animation if none of the specified keys are pressed.</p>
          </div>
        </div>
      </>
    );
  };
  
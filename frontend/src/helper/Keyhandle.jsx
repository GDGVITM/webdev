const continuousAnimations = ["walk", "FastRun", "Fly", "FrontFlip", "Jump", "LongJump", "PushUp"];

// Handle key down event
export const handleKeyDown = (event, setAnimation) => {
  switch (event.key) {
    case 'd':
    case 'a':
    case 'w':
    case 's':
      setAnimation('walk_T-pose');
      break;
    case 'b':
      setAnimation('Punch_T-pose');
      break;
    case 'f':
      setAnimation("Fly_T-pose");
      break;
    case 't':
      setAnimation("sitTalk_T-pose");
      break;
    case 'j':
      setAnimation("Jump_T-pose");
      break;
    case 'h':
      setAnimation("Dance_T-pose");
      break;
    case 'g':
      setAnimation("Sing_T-pose");
      break;
    case 'p':
      setAnimation("PushUp_T-pose");
      break;
    case 'k':
      setAnimation("knee-kcik");
      break;
    case 'm':
      setAnimation("mma");
      break;
    case 'x':
      setAnimation("swim");
      break;
    case '8':
      setAnimation("mma-kick");
      break;
    case '1':
      setAnimation("standing");
      break;
    case '2':
      setAnimation("sit_T-pose");
      break;
    case '3':
      setAnimation("LongJump_T-pose");
      break;
    case '4':
      setAnimation("Turn_T-pose");
      break;
    case '5':
      setAnimation("FastRun_T-pose");
      break;
    case '6':
      setAnimation("BackFlip_T-pose");
      break;
    case '7':
      setAnimation("side-kick");
      break;
    default:
      setAnimation("standing");
      break;
  }
};

// Handle key up event
export const handleKeyUp = (event, setAnimation, animation) => {
  if (!continuousAnimations.includes(animation) && ['a', 'w', 's', 'd','8','4'].includes(event.key)) {
    setAnimation("standing");
  }
  if (!continuousAnimations.includes(animation) && ['5'].includes(event.key)) {
    setAnimation("crouched-walk.001");
  }
};

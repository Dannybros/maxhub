
import c_m from '../../../../assets/camera/compose-m.png'
import s_m from '../../../../assets/camera/speaker-m.png'
import p_m from '../../../../assets/camera/present-m.png'
import g_m from '../../../../assets/camera/grid-m.png'
import m_m from '../../../../assets/camera/manual-m.png'
import b_m from '../../../../assets/camera/body-fit-m.png'

import q_example from '../../../../assets/camera/Quad-example.jpg'
import q_icon from '../../../../assets/camera/Quad-mode.png'
import p_example from '../../../../assets/camera/portrait-example.jpg'
import p_icon from '../../../../assets/camera/Portrait-mode.png'
import c_example from '../../../../assets/camera/compose-example.jpg'
import c_icon from '../../../../assets/camera/compose-mode.png'
import s_example from '../../../../assets/camera/split-example.jpg'
import s_icon from '../../../../assets/camera/split-mode.png'
import pa_example from '../../../../assets/camera/panoramic-example.jpg'
import pa_icon from '../../../../assets/camera/panoramic-mode.png'

import con_high_1 from '../../../../assets/camera/con-high-1.webp'
import con_high_2 from '../../../../assets/camera/con-high-2.webp'
import con_high_3 from '../../../../assets/camera/con-high-3.webp'
import con_high_4 from '../../../../assets/camera/con-high-4.webp'

export const con_features=[
  {
    img:con_high_1,
    title:"Tracking you wherever you are",
    desc:"Enhance communication with 6 intelligent microphones featuring an 8m voice pickup, speaker tracking, voice location locking, and AGC for clear and consistent voice output at any distance."
  },
  {
    img:con_high_2,
    title:"Filter noise for what really mattere",
    desc:"Keep the attention on you by filtering out distracting background noises like tapping, typing, or doors closing."
  },
  {
    img:con_high_3,
    title:"Hear clearly",
    desc:"Whether your meeting is a conversation between two people or a larger gathering of up to 8, you'll hear everyone clearly thanks to the studio-quality Hi-Fi speaker with 8 W+3 W output power. Plus, the tweeter and woofer design deliver an immersive sound experience to every corner of the room."
  },
  {
    img:con_high_4,
    title:"Easily auto-frame participants",
    desc:"Auto-Framing with intelligent face detection seamlessly tracks the active speaker to keep participants engaged"
  },
]

export const modes=[
    {
      title:"Compose Mode",
      desc:"Combining a panoramic view with closeups, you can view the whole room while seeing 6 key participants in closeup.",
      img:c_m
    },
    {
      title:"Manual Mode",
      desc:"Zoom into a specific area anywhere in the room.",
      img:m_m
    },
    {
      title:"Body Fit Mode",
      desc:"Focus on all the participants",
      img:b_m
    },
    {
      title:"Grid Mode",
      desc:"See closeups of 4 key participants simultaneously, each in their own quadrant.",
      img:g_m
    },
    {
      title:"Presentation Mode",
      desc:"Focus on the whiteboard and the active presenter at the same time.",
      img:p_m
    },
    {
      title:"Speaker Mode",
      desc:"See the whole meeting room while focusing on all the participants simultaneously",
      img:s_m
    },
]

export const examples=[
    {
      title:"Quad View Mode",
      img:q_example,
      icon:q_icon
    },
    {
      title:"Portrait Mode",
      img:p_example,
      icon:p_icon
    },
    {
      title:"Compose Mode",
      img:c_example,
      icon:c_icon
    },
    {
      title:"Split Mode",
      img:s_example,
      icon:s_icon
    },
    {
      title:"Panoramic Mode",
      img:pa_example,
      icon:pa_icon
    },
]
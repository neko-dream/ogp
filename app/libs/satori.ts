import satori from 'satori';

const FONT_URL = 'http://themes.googleusercontent.com/static/fonts/abeezee/v1/JYPhMn-3Xw-JGuyB-fEdNA.ttf';

export const createSVG = async (svg: JSX.Element) => {
  return await satori(svg, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Roboto',
        data: await fetch(FONT_URL).then((res) => res.arrayBuffer()),
        weight: 300,
        style: 'normal',
      },
    ],
  });
};

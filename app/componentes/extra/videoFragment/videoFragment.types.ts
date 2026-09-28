export interface VideoFragmentData {
  /** Unique id. Used later as the React "key" when we render a list of clips. */
  id: string; //KEY

  /** Path to the video file. Either something in /public (e.g. "/extra/videos/x.mp4")
   *  or a full external URL. */
  videoSrc: string;

  /** Short title shown above the clip, e.g. "Ordering coffee". */
  title: string;

  /** The translation text shown when the user reveals it. */
  translation: string;
}
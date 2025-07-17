export interface SegmentData {
  label: string;
  color: string;
}

export const SEGMENTS_DATA: SegmentData[] = [
  { label: '1', color: '#c14646' },
  { label: '2', color: '#3f8c4e' },
  { label: '3', color: '#4566aa' },
  { label: '4', color: '#b59a34' },
  { label: '5', color: '#3c9994' },
  { label: '6', color: '#9a4e97' },
];

// Used to calculate the amount of degrees to rotate per section
export const SEGMENTS_CIRCUMFERENCE = 360 / SEGMENTS_DATA.length;

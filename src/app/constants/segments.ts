export interface SegmentData {
  label: string;
  color: string;
}

export const SEGMENTS_DATA: SegmentData[] = [
  { label: '1', color: '#c14646' }, // rich coral red
  { label: '2', color: '#3f8c4e' }, // leafy green
  { label: '3', color: '#4566aa' }, // medium slate blue
  { label: '4', color: '#b59a34' }, // golden ochre
  { label: '5', color: '#3c9994' }, // teal blue
  { label: '6', color: '#9a4e97' }, // medium plum
]

export const SEGMENTS_CIRCUMFERENCE = 360 / SEGMENTS_DATA.length;
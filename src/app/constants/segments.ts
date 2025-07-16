export interface SegmentData {
  label: string;
  color: string;
}

export const SEGMENTS_DATA: SegmentData[] = [
  { label: 'One', color: '#c14646' }, // rich coral red
  { label: 'Two', color: '#3f8c4e' }, // leafy green
  { label: 'Three', color: '#4566aa' }, // medium slate blue
  { label: 'Four', color: '#b59a34' }, // golden ochre
  { label: 'Five', color: '#3c9994' }, // teal blue
  { label: 'Six', color: '#9a4e97' }, // medium plum
]

export const SEGMENTS_CIRCUMFERENCE = 360 / SEGMENTS_DATA.length;
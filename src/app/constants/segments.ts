export interface SegmentData {
  label: string;
  color: string;
}

export const SEGMENTS_DATA: SegmentData[] = [
  { label: 'One', color: '#f66' },
  { label: 'Two', color: '#6f6' },
  { label: 'Three', color: '#66f' },
  { label: 'Four', color: '#ff6' },
  { label: 'Five', color: '#6ff' },
  { label: 'Six', color: '#f6f' },
];

export const SEGMENTS_CIRCUMFERENCE = 360 / SEGMENTS_DATA.length;
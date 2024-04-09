import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getSortedTimelineData() {
  // Get file names under /timeline
  const timelineDirectory = path.join(process.cwd(), 'timeline_items');
  const fileNames = fs.readdirSync(timelineDirectory);
  const allTimelineData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(timelineDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const item = {
      id,
      ...matterResult.data,
      description: matterResult.content,
    };

    // If end-date is not set, set it to "Ongoing"
    if (!item['end-date']) {
      item['end-date'] = 'Ongoing';
    }

    return item;
  });
  // Sort posts by year
  return allTimelineData.sort((a, b) => {
    if (a['end-date'] === '' || a['end-date'] === 'Ongoing') return -1;
    if (b['end-date'] === '' || b['end-date'] === 'Ongoing') return 1;
    return a['end-date'] < b['end-date'] ? 1 : -1;
  });
}
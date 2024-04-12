import {
	HomepageOption,
	TechRadarConfigData,
	TechRadarData,
} from "@/api/types/radar";
import { Language } from "@/api/types/radar/language";
import { HeroHeadline } from "@/components/base/radar/HeroHeadline/HeroHeadline";
import { featuredOnly, useFetch } from "@/lib/utils";

export default function TechRadarPage() {
	const data = useFetch<TechRadarData>("/radar-config/db1-opinion.json");

	const config = useFetch<TechRadarConfigData>("/radar-config/config.json");

  const content = useFetch<Language>("/radar-config/en.json");

  const contentRadar = content?.translation.techRadar
  

	if (data && config && contentRadar) {
		const { items, releases } = data;

    const publishedLabel = contentRadar.pageIndex.publishedLabel;

		const newestRelease = releases.slice(-1)[0];
		const numberOfReleases = releases.length;
		const showChart =
			config.homepageContent === HomepageOption.chart ||
			config.homepageContent === HomepageOption.both;
		const showColumns =
			config.homepageContent === HomepageOption.columns ||
			config.homepageContent === HomepageOption.both;

      return (
        <main>
          <div className="headline-group">
            <HeroHeadline alt={`${contentRadar.versionLabel} #${numberOfReleases}`}>
              {contentRadar.radarName}
            </HeroHeadline>
          </div>
          {/* {showChart && <RadarGrid items={featuredOnly(items)} config={config} />}
          {showColumns && (
            <QuadrantGrid items={featuredOnly(items)} config={config} />
          )} */}
          <div className="publish-date">
            {publishedLabel} {newestRelease}
          </div>
        </main>
      );
	}

	
}

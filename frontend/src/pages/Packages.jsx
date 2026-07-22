import Text from "../components/atomics/Text";
import { packages } from "../data/packages";
import Package from "../components/packages/Package";
import Grid from "../components/atomics/Grid";

export function Packages() {
  return (
    <section id="packages" className="section packages">
      <Text as="h2" size="md" color="color-2" className="text-shadow">My packages</Text>

      <Grid
        minColumnWidth={420}
        maxColumns={2}
        gap={16}
        padding={0}
        staggerMs={140}
        animateOnView
        className="packages-grid motion-diagonal"
      >
        {packages.map((item) => (
            <Package key={item.name} {...item} />
        ))}
      </Grid>
    </section>
  );
}

export default Packages;

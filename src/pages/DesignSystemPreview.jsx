import React, { useState } from 'react';
import Typography from '../components/Typography';
import styles from './DesignSystemPreview.module.scss';
import Stack from '../components/Layout/Stack';
import Image from '../components/Image/Image';
import { Button, Input, Select, Checkbox } from '../components/Form';
import { List, ListItem } from '../components/List';
import { Badge, Tag } from '../components/Badge';
import { Callout, TextDivider } from '../components/Content';

// Typography Spec Data (Kept from previous step)
const specs = {
    'title-hero': { label: 'Title Hero', preview: 'Title Hero', family: 'family-sans', size: 'size-hero', lineHeight: 'line-height-00', weight: 'weight-bold' },
    'title-page': { label: 'Title Page', preview: 'Title Page', family: 'family-sans', size: 'size-07', lineHeight: 'line-height-00', weight: 'weight-bold' },
    'subtitle': { label: 'Subtitle', preview: 'Subtitle', family: 'family-sans', size: 'size-05', lineHeight: 'line-height-01', weight: 'weight-semibold' },
    'heading': { label: 'Heading', preview: 'Heading', family: 'family-sans', size: 'size-04', lineHeight: 'line-height-02', weight: 'weight-bold' },
    'body-base': { label: 'Body Base', preview: 'Body Base', family: 'family-sans', size: 'size-03', lineHeight: 'line-height-03', weight: 'weight-regular' },
    'body-strong': { label: 'Body Strong', preview: 'Body Strong', family: 'family-sans', size: 'size-03', lineHeight: 'line-height-03', weight: 'weight-bold' },
    'body-small': { label: 'Body Small', preview: 'Body Small', family: 'family-sans', size: 'size-01', lineHeight: 'line-height-03', weight: 'weight-regular' }
};

const SpecRow = ({ label, value }) => (
    <div className={styles.specRow}>
        <div className={styles.specLabel}>{label}</div>
        <div className={styles.specValue}>{value}</div>
    </div>
);

const SpecCard = ({ variant }) => {
    const data = specs[variant];
    if (!data) return null;
    return (
        <div className={styles.specCard}>
            <div className={styles.previewArea}>
                <Typography variant={variant}>{data.preview}</Typography>
            </div>
            <div className={styles.specsTable}>
                <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>{data.label}</div>
                <SpecRow label="Size" value={data.size} />
                <SpecRow label="Weight" value={data.weight} />
            </div>
        </div>
    );
};

const SectionHeader = ({ title, subtitle }) => (
    <div style={{ marginBottom: '2rem', marginTop: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
        <Typography variant="heading">{title}</Typography>
        {subtitle && <Typography variant="body-small" style={{ color: 'var(--color-text-secondary)' }}>{subtitle}</Typography>}
    </div>
);

function DesignSystemPreview() {
    const [tags, setTags] = useState(['Spring', 'Smart', 'Modern']);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Typography variant="title-page">Design System</Typography>
                <Typography variant="subtitle" style={{ color: 'var(--color-text-secondary)' }}>
                    Comprehensive Guide: Typography, Layout, Forms, Content
                </Typography>
            </header>

            {/* Typography Section */}
            <SectionHeader title="Typography" subtitle="Styles & Specifications" />
            <div className={styles.section}>
                <SpecCard variant="title-hero" />
                <SpecCard variant="title-page" />
                <SpecCard variant="subtitle" />
                <SpecCard variant="heading" />
                <SpecCard variant="body-base" />
                <SpecCard variant="body-strong" />
                <SpecCard variant="body-small" />
            </div>

            {/* Layout Section */}
            <SectionHeader title="Layout System" subtitle="Flexbox & Stack Components" />
            <div className="flex-col gap-lg">
                <Typography variant="body-strong">Row Stack (Gap: md)</Typography>
                <Stack direction="row" gap="1rem" className="items-center">
                    <div className="p-4 bg-primary text-white" style={{ background: 'var(--color-brand-500)', padding: '1rem', color: 'white', borderRadius: '4px' }}>Box 1</div>
                    <div className="p-4 bg-primary text-white" style={{ background: 'var(--color-brand-600)', padding: '1rem', color: 'white', borderRadius: '4px' }}>Box 2</div>
                    <div className="p-4 bg-primary text-white" style={{ background: 'var(--color-brand-700)', padding: '1rem', color: 'white', borderRadius: '4px' }}>Box 3</div>
                </Stack>
            </div>

            {/* Image System */}
            <SectionHeader title="Image System" subtitle="Aspect Ratios" />
            <div className="grid grid-cols-3 gap-lg">
                <Stack>
                    <Typography variant="body-small">Ratio 1:1</Typography>
                    <Image src="https://picsum.photos/400/400" ratio="1:1" />
                </Stack>
                <Stack>
                    <Typography variant="body-small">Ratio 16:9</Typography>
                    <Image src="https://picsum.photos/400/300" ratio="16:9" />
                </Stack>
                <Stack>
                    <Typography variant="body-small">Ratio 4:3</Typography>
                    <Image src="https://picsum.photos/400/300" ratio="4:3" />
                </Stack>
            </div>

            {/* Form & List System */}
            <SectionHeader title="Form & Menu System" subtitle="Interactive Components" />
            <div className="grid grid-cols-2 gap-lg" style={{ maxWidth: '1200px', gridTemplateColumns: '300px 1fr' }}>

                {/* Sidebar Demo */}
                <Stack gap="2rem" style={{ borderRight: '1px solid var(--color-border)', paddingRight: '2rem' }}>
                    <Stack gap="1rem">
                        <Typography variant="body-strong">Keywords</Typography>
                        <Input placeholder="Search..." />
                        <div className="flex-row" style={{ flexWrap: 'wrap', gap: '8px' }}>
                            {tags.map(tag => (
                                <Tag key={tag} onClose={() => setTags(tags.filter(t => t !== tag))}>{tag}</Tag>
                            ))}
                        </div>
                    </Stack>

                    <Stack gap="0.5rem">
                        <Typography variant="body-strong">Color</Typography>
                        <Checkbox label="Red" defaultChecked />
                        <Checkbox label="Blue" />
                        <Checkbox label="Green" />
                    </Stack>

                    <Stack gap="0.5rem">
                        <Typography variant="body-strong">Size</Typography>
                        <Checkbox label="Small" />
                        <Checkbox label="Medium" defaultChecked />
                        <Checkbox label="Large" />
                    </Stack>
                </Stack>

                {/* Content Area Demo */}
                <Stack gap="2rem">
                    <Stack direction="row" justify="space-between" align="center">
                        <Typography variant="heading">Products</Typography>
                        <Stack direction="row" gap="0.5rem">
                            <Button variant="text" style={{ fontWeight: 'bold' }}>New</Button>
                            <Button variant="text">Price Asc</Button>
                            <Button variant="text">Price Desc</Button>
                        </Stack>
                    </Stack>

                    <List>
                        {[1, 2, 3].map(i => (
                            <ListItem
                                key={i}
                                icon={<div style={{ width: 20, height: 20, background: '#eee', borderRadius: '4px' }}></div>}
                                action={<Badge variant={i === 1 ? 'success' : 'neutral'}>{i === 1 ? 'New' : 'In Stock'}</Badge>}
                            >
                                <Typography variant="body-strong">Product Item {i}</Typography>
                                <Typography variant="body-small" style={{ color: 'var(--color-text-tertiary)' }}>Description of product {i} goes here.</Typography>
                            </ListItem>
                        ))}
                    </List>

                    <Stack direction="row" gap="1rem">
                        <Button variant="primary">Load More</Button>
                        <Button variant="secondary">Cancel</Button>
                    </Stack>

                    <TextDivider>Or continue with</TextDivider>

                    {/* Content Guidelines Demo */}
                    <Typography variant="heading">Content Guidelines</Typography>

                    <div className="grid grid-cols-2 gap-lg">
                        <Callout variant="success" title="Recommended" icon="✓">
                            We recommend using inline style overrides e.g. <strong>bold</strong>, <em>italic</em> for body content.
                        </Callout>

                        <Callout variant="error" title="Not Recommended" icon="✕">
                            Figma doesn't recommend using inline style overrides for large blocks of text.
                        </Callout>
                    </div>

                    <Callout variant="info" title="Info">
                        For longer, more consistently styled text strings, implementing variables within a text style will align a lot closer to code.
                    </Callout>

                </Stack>
            </div>

        </div>
    );
}

export default DesignSystemPreview;

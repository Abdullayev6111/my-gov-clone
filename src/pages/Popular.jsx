import { Card, Image, Text, Group, Badge, Box, Button, Stack } from '@mantine/core';
import { ServicesList } from '../data/data';
import { useTranslation } from 'react-i18next';

const Popular = () => {
  const { t } = useTranslation();
  return (
    <section
      className="container popular-services"
      style={{ background: 'white', padding: 40, borderRadius: 15 }}
    >
      <Group position="apart" mb="md">
        <Text size="35px" weight={700} c="#0068e0" style={{ fontFamily: 'montserrat-b' }}>
          {t('home.popular')}
        </Text>
      </Group>

      <Stack spacing="sm">
        {ServicesList?.map((item) => (
          <Card
            className="popular-card"
            key={item.id}
            radius="md"
            sx={{
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.2s ease',

              '&:hover': {
                backgroundColor: '#f1f8ff',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Group noWrap align="center">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#f2f4f7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}
              >
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  style={{ filter: item.filter, width: 25, height: 25 }}
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Text weight={500} size="sm" mb={6} className="popular-card-title">
                  {t(item.title)}
                </Text>

                <Group spacing="xs">
                  <Group spacing={4}>
                    <i className="fa-regular fa-star"></i>
                    <Text size="xs">{item.rating}</Text>
                  </Group>

                  <Group spacing={4}>
                    <i className="fa-regular fa-circle-check"></i>
                    <Text size="xs">{item.views}</Text>
                  </Group>

                  <Group spacing={4}>
                    <i className="fa-regular fa-clock"></i>
                    <Text size="xs">{item.time}</Text>
                  </Group>
                </Group>
              </Box>
            </Group>
          </Card>
        ))}
      </Stack>
    </section>
  );
};

export default Popular;

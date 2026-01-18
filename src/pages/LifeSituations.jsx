import { Card, Image, Text, SimpleGrid, Box } from '@mantine/core';
import { SituationsData } from '../data/data';
import { useTranslation } from 'react-i18next';

const LifeSituations = () => {
  const { t } = useTranslation();
  return (
    <Box className="container">
      <h1 className="text-[35px] text-[#0068e0] montserrat-b" style={{ marginBottom: 20 }}>
        {t('aside.lifeEvents')}
      </h1>

      <SimpleGrid cols={4} spacing={25}>
        {SituationsData.map((item) => (
          <Card
            key={item.id}
            radius="md"
            withBorder
            style={{
              borderColor: 'rgb(0 0 0 / 8%)',
              cursor: 'pointer',
              height: '100%',
              padding: '16px',
            }}
          >
            <Box
              w={180}
              h={180}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                marginTop: 10,
              }}
            >
              <Image src={item.image} width={180} height={180} fit="contain" />
            </Box>

            <Text
              fw={700}
              mt="sm"
              mb="xs"
              style={{
                color: '#0068e0',
                fontSize: '17px',
                textAlign: 'center',
                fontFamily: 'montserrat-b',
              }}
            >
              {t(item.title)}
            </Text>

            <Text
              style={{
                fontSize: '12px',
                textAlign: 'center',
              }}
              c="#000"
            >
              {t(item.text)}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LifeSituations;
